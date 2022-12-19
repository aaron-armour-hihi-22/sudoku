import React from 'react'

function createRow(row) {
  return (
    <>
      {row.map((element) => (
        <td key={element}>{element}</td>
      ))}
    </>
  )
}

function createSubSquares() {
  const subSquares = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]

  return (
    <>
      {subSquares.map((row, index) => (
        <tr key={index}>{createRow(row)}</tr>
      ))}
    </>
  )
}

function SudokuGrid() {
  return (
    <>
      {/* <p>This is the grid!</p> */}
      <table>{createSubSquares()}</table>
    </>
  )
}

export default SudokuGrid
