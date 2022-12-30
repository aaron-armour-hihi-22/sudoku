import { RESET_GRID } from '../actions/cells'
import {
  SET_SELECTED_CELL,
  CLEAR_SELECTED_CELL,
} from '../actions/selectedCellIndex'

const initialState = null

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case RESET_GRID:
      return null

    case SET_SELECTED_CELL:
      return payload

    case CLEAR_SELECTED_CELL:
      return null

    default:
      return state
  }
}

export default reducer
