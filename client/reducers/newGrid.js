import { SET_NEW_GRID, UNSET_NEW_GRID } from '../actions/newGrid'

function reducer(state = false, action) {
  const { type } = action

  switch (type) {
    case SET_NEW_GRID:
      return true

    case UNSET_NEW_GRID:
      return false

    default:
      return state
  }
}

export default reducer
