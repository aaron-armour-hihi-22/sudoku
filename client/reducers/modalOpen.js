import { SET_MODAL_OPEN, SET_MODAL_CLOSED } from '../actions/modalOpen'

function reducer(state = false, action) {
  const { type } = action

  switch (type) {
    case SET_MODAL_OPEN:
      return true

    case SET_MODAL_CLOSED:
      return false

    default:
      return state
  }
}

export default reducer
