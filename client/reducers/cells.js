import { SET_CELL_VALUE } from '../actions/cells'
import { initialState } from './cellsInit'

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_CELL_VALUE: {
      const { cellIndex, value } = payload
      state[cellIndex].value = value
      return state
    }
    default:
      return state
  }
}

export default reducer
