import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unsetNewGrid } from '../actions/newGrid'

import Cell from './Cell'

const cellIndices = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
]

function createCellRow(row, index) {
  return (
    <tr key={index}>
      {row.map((element) => (
        <Cell cellIndex={element} key={element} />
      ))}
    </tr>
  )
}

function createCells() {
  return cellIndices.map((row, index) => createCellRow(row, index))
}

function SudokuGrid() {
  const dispatch = useDispatch()
  const newGrid = useSelector((reduxStore) => reduxStore.newGrid)
  const [updateNum, setUpdateNum] = useState(0)

  useEffect(() => {
    setUpdateNum((num) => num++)
    dispatch(unsetNewGrid())
  }, [newGrid])

  return (
    <>
      <table role="grid">
        <tbody>{createCells()}</tbody>
      </table>
    </>
  )
}

export default SudokuGrid
