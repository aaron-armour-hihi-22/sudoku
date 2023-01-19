import React from 'react'

import MenuAppBar from './MenuAppBar'
import NewSudokuModal from './NewSudokuModal'
import SudokuGrid from './SudokuGrid'
import SudokuOptions from './SudokuOptions'

function App() {
  return (
    <>
      <MenuAppBar />
      <NewSudokuModal />
      <section className="main">
        <SudokuGrid />
        <SudokuOptions />
      </section>
    </>
  )
}

export default App
