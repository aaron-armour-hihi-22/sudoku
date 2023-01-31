const sudokuGen = require('sudoku-gen')

export function getPuzzle(difficulty) {
  const sudoku = sudokuGen.getSudoku(difficulty)
  return sudoku.puzzle.replaceAll('-', '0')
}
