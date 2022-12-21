import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCellValue } from '../actions/cells'
import { clearSelectedCell } from '../actions/selectedCellIndex'

function getNeighbours(cells, selectedCellIndex) {
  const selectedCell = cells[selectedCellIndex]
  return cells.filter((cell) => {
    return (
      (cell.row === selectedCell.row ||
        cell.column === selectedCell.column ||
        cell.subsquare === selectedCell.subsquare) &&
      cell !== cells[selectedCellIndex]
    )
  })
}

function findConflicts(neighbours, value) {
  if (value === '') return []

  return neighbours.filter((cell) => cell.value === value)
}

function updateNumConflicts(cells, selectedCellIndex, prevValue, newValue) {
  const neighbours = getNeighbours(cells, selectedCellIndex)
  // console.log(cells[selectedCellIndex])
  // console.log(neighbours)

  const prevConflicts = findConflicts(neighbours, prevValue)
  const newConflicts = findConflicts(neighbours, newValue)

  for (const prevConflict of prevConflicts) {
    prevConflict.numConflicts--
  }

  for (const newConflict of newConflicts) {
    newConflict.numConflicts++
  }

  cells[selectedCellIndex].numConflicts = newConflicts.length

  // console.log(cells[selectedCellIndex])
  // console.log(neighbours)
}

function NumberPicker({ prevValue }) {
  const dispatch = useDispatch()
  const cells = useSelector((reduxStore) => reduxStore.cells)
  const selectedCellIndex = useSelector(
    (reduxStore) => reduxStore.selectedCellIndex
  )

  // console.log(getNeighbours(cells, selectedCellIndex))
  // const randomIndex = Math.floor(Math.random() * 81)
  // cells[randomIndex].numConflicts++

  function valueSetter(value) {
    dispatch(setCellValue(selectedCellIndex, value))

    if (value !== prevValue) {
      updateNumConflicts(cells, selectedCellIndex, prevValue, value)
    }

    dispatch(clearSelectedCell())
  }

  function optionHandler(event) {
    valueSetter(event.target.value)
  }

  function keyHandler(event) {
    const theKey = event.key

    if (theKey === 'Escape') {
      dispatch(clearSelectedCell())
    } else if ('1' <= theKey && theKey <= '9') {
      valueSetter(theKey)
    } else if (theKey === 'Backspace' || theKey === 'Delete') {
      valueSetter('')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyHandler)

    return () => window.removeEventListener('keydown', keyHandler)
  }, [])

  // Note: add a bogus first option so that onClick fires on any of 1-9
  return (
    <>
      <select onChange={optionHandler}>
        <option style={{ display: 'none' }} value="?"></option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={''}></option>
      </select>
    </>
  )
}

export default NumberPicker
