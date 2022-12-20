export const SET_SELECTED_CELL = 'SET_SELECTED_CELL'
export const CLEAR_SELECTED_CELL = 'CLEAR_SELECTED_CELL'

export function setSelectedCell(cellIndex) {
  return {
    type: SET_SELECTED_CELL,
    payload: cellIndex,
  }
}

export function clearSelectedCell() {
  return {
    type: CLEAR_SELECTED_CELL,
  }
}
