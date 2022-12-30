import React from 'react'
import SudokuGrid from './SudokuGrid'
import SudokuOptions from './SudokuOptions'

function App() {
  return (
    <>
      <header className="header">
        <h1>Sudoku</h1>
      </header>
      <section className="main">
        <SudokuGrid />
        <SudokuOptions />
      </section>
    </>
  )
}

export default App
