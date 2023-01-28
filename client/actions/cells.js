import { getPuzzle } from '../lib/newSudoku'
import { setNewGrid } from './newGrid'

export const RESET_GRID = 'RESET_GRID'
export const INITIALISE_GRID = 'INITIALISE_GRID'
export const SET_CELL_VALUE = 'SET_CELL_VALUE'
export const FREEZE_CELLS = 'FREEZE_CELLS'

export function resetGrid() {
  return {
    type: RESET_GRID,
  }
}

export function initialiseGrid(startingGridString) {
  return {
    type: INITIALISE_GRID,
    payload: startingGridString,
  }
}

export function setCellValue(cellIndex, value) {
  return {
    type: SET_CELL_VALUE,
    payload: { cellIndex, value },
  }
}

export function freezeCells() {
  return {
    type: FREEZE_CELLS,
  }
}

export function initialiseNewGridThunk(difficulty) {
  return function (dispatch) {
    try {
      const newGrid = getPuzzle(difficulty)
      dispatch(resetGrid())
      dispatch(initialiseGrid(newGrid))
      dispatch(setNewGrid())
    } catch (err) {
      console.log(err.message)
    }
  }
}
