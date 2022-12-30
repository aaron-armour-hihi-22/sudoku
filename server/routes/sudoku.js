const express = require('express')
const router = express.Router()

const sudokuGen = require('sudoku-gen')

function getPuzzle(difficulty) {
  const sudoku = sudokuGen.getSudoku(difficulty)
  return { puzzle: sudoku.puzzle.replaceAll('-', '0') }
}

router.get('/', (req, res) => {
  try {
    const difficulty = req.query.difficulty
    if (
      difficulty === 'easy' ||
      difficulty === 'medium' ||
      difficulty === 'hard' ||
      difficulty === 'expert'
    ) {
      res.json(getPuzzle(difficulty))
    } else {
      res.status(400).json({
        message:
          'required parameter difficulty must be one of: easy, medium, hard, or expert',
      })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
