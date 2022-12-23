export const SET_CELL_VALUE = 'SET_CELL_VALUE'
export const INITIALISE_GRID = 'INITIALISE_GRID'

export function setCellValue(cellIndex, value) {
  return {
    type: SET_CELL_VALUE,
    payload: { cellIndex, value },
  }
}

export function initialiseGrid(startingGridString) {
  return {
    type: INITIALISE_GRID,
    payload: startingGridString,
  }
}
