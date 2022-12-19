import React from 'react'
import SudokuGrid from './SudokuGrid'

function App() {
  return (
    <>
      <header className="header">
        <h1>Sudoku</h1>
      </header>
      <section className="main">
        <SudokuGrid />
        {/* <p>Hello!</p> */}
      </section>
    </>
  )
}

export default App
