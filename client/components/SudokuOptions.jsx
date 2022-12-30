import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { initialiseNewGridThunk } from '../actions/cells'

function SudokuOptions() {
  const [difficulty, setDifficulty] = useState('')
  const dispatch = useDispatch()

  function handleDifficultyChange(event) {
    setDifficulty(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (difficulty === '') {
      alert('You must select a difficulty level for the new puzzle!')
      return
    }

    dispatch(initialiseNewGridThunk(difficulty))
    setDifficulty('')
  }

  return (
    <>
      <form>
        <div>
          <input
            type="radio"
            id="easy"
            name="easy"
            value="easy"
            checked={difficulty === 'easy'}
            onChange={handleDifficultyChange}
          />
          <label htmlFor="easy"> easy</label>
        </div>
        <div>
          <input
            type="radio"
            id="medium"
            name="medium"
            value="medium"
            checked={difficulty === 'medium'}
            onChange={handleDifficultyChange}
          />
          <label htmlFor="medium"> medium</label>
        </div>
        <div>
          <input
            type="radio"
            id="hard"
            name="hard"
            value="hard"
            checked={difficulty === 'hard'}
            onChange={handleDifficultyChange}
          />
          <label htmlFor="hard"> hard</label>
        </div>
        <div>
          <input
            type="radio"
            id="expert"
            name="expert"
            value="expert"
            checked={difficulty === 'expert'}
            onChange={handleDifficultyChange}
          />
          <label htmlFor="expert"> expert</label>
        </div>
        <button onClick={handleSubmit}>New Puzzle</button>
      </form>
    </>
  )
}

export default SudokuOptions
