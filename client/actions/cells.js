export const SET_CELL_VALUE = 'SET_CELL_VALUE'

export function setCellValue(cellIndex, value) {
  return {
    type: SET_CELL_VALUE,
    payload: { cellIndex, value },
  }
}
