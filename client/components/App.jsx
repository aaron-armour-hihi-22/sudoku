import React from 'react'

import MenuAppBar from './MenuAppBar'
import NewSudokuModal from './NewSudokuModal'
import SnackMessage from './SnackMessage'
import SudokuGrid from './SudokuGrid'

function App() {
  return (
    <>
      <MenuAppBar />
      <SnackMessage />
      <NewSudokuModal />
      <section className="main">
        <SudokuGrid />
      </section>
    </>
  )
}

export default App
