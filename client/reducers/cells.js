import { INITIALISE_GRID, SET_CELL_VALUE } from '../actions/cells'
import { initialState } from './cellsInit'

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_CELL_VALUE: {
      const { cellIndex, value } = payload
      state[cellIndex].value = value
      return state
    }
    case INITIALISE_GRID: {
      const startingValues = payload.split('')
      startingValues.forEach((value, index) => {
        if (value !== '0') {
          state[index].value = value
          state[index].isAStartingCell = true
          state[index].isClickable = false
        }
      })

      return state
    }
    default:
      return state
  }
}

export default reducer
