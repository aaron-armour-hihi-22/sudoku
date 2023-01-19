import React from 'react'

import MenuAppBar from './MenuAppBar'
import SudokuGrid from './SudokuGrid'
import SudokuOptions from './SudokuOptions'

function App() {
  return (
    <>
      <MenuAppBar />
      <section className="main">
        <SudokuGrid />
        <SudokuOptions />
      </section>
    </>
  )
}

export default App
