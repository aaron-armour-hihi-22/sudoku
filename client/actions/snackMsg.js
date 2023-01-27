export const LAUNCH_SNACK_MSG = 'LAUNCH_SNACK_MSG'
export const CLEAR_SNACK_MSG = 'CLEAR_SNACK_MSG'

export function launchSnackMsg(message, autoHideDuration = 10000) {
  return {
    type: LAUNCH_SNACK_MSG,
    payload: {
      message,
      autoHideDuration,
    },
  }
}

export function clearSnackMsg() {
  return {
    type: CLEAR_SNACK_MSG,
  }
}
