import {
  SET_SELECTED_CELL,
  CLEAR_SELECTED_CELL,
} from '../actions/selectedCellIndex'

const initialState = null

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_SELECTED_CELL:
      return payload

    case CLEAR_SELECTED_CELL:
      return null

    default:
      return state
  }
}

export default reducer
