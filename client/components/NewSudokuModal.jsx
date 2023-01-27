import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import { setModalClosed } from '../actions/modalOpen'
import { initialiseNewGridThunk } from '../actions/cells'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function NewSudokuModal() {
  const [difficulty, setDifficulty] = useState('')
  const dispatch = useDispatch()
  const open = useSelector((reduxStore) => reduxStore.modalOpen)

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
    dispatch(setModalClosed())
  }

  function handleClose() {
    dispatch(setModalClosed())
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
        </Box>
      </Modal>
    </div>
  )
}

export default NewSudokuModal
