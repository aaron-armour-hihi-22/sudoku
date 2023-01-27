import { LAUNCH_SNACK_MSG, CLEAR_SNACK_MSG } from '../actions/snackMsg'

function reducer(state = null, action) {
  const { type, payload } = action

  switch (type) {
    case LAUNCH_SNACK_MSG:
      return payload

    case CLEAR_SNACK_MSG:
      return null

    default:
      return state
  }
}

export default reducer
