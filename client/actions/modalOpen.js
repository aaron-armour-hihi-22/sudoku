export const SET_MODAL_OPEN = 'SET_MODAL_OPEN'
export const SET_MODAL_CLOSED = 'SET_MODAL_CLOSED'

export function setModalOpen() {
  return {
    type: SET_MODAL_OPEN,
  }
}

export function setModalClosed() {
  return {
    type: SET_MODAL_CLOSED,
  }
}
