import React from 'react'

import MenuAppBar from './MenuAppBar'
import NewSudokuModal from './NewSudokuModal'
import SudokuGrid from './SudokuGrid'

function App() {
  return (
    <>
      <MenuAppBar />
      <NewSudokuModal />
      <section className="main">
        <SudokuGrid />
      </section>
    </>
  )
}

export default App
