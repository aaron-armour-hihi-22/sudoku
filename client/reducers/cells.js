import {
  FREEZE_CELLS,
  INITIALISE_GRID,
  RESET_GRID,
  SET_CELL_VALUE,
} from '../actions/cells'
import { initialState } from './cellsInit'

function reducer(
  state = initialState.map((obj) => {
    return { ...obj }
  }),
  action
) {
  const { type, payload } = action

  switch (type) {
    case RESET_GRID: {
      return initialState.map((obj) => {
        return { ...obj }
      })
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

    case SET_CELL_VALUE: {
      const { cellIndex, value } = payload
      state[cellIndex].value = value
      return state
    }

    case FREEZE_CELLS: {
      state.forEach((cell) => {
        cell.isClickable = false
      })

      return state
    }

    default:
      return state
  }
}

export default reducer
