import request from 'superagent'

const sudokuUrl = '/api/v1/sudoku'

export async function fetchNewGrid(difficulty) {
  try {
    const res = await request.get(sudokuUrl).query({ difficulty })
    return res.body.puzzle
  } catch (err) {
    console.log(err.message)
  }
}
