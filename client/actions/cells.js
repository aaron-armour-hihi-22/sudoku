export const SET_CELL_VALUE = 'SET_CELL_VALUE'
export const INITIALISE_GRID = 'INITIALISE_GRID'
export const FREEZE_CELLS = 'FREEZE_CELLS'

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

export function freezeCells() {
  return {
    type: FREEZE_CELLS,
  }
}
