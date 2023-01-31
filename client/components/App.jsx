import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import MenuAppBar from './MenuAppBar'
import NewSudokuModal from './NewSudokuModal'
import SnackMessage from './SnackMessage'
import SudokuGrid from './SudokuGrid'
import Welcome from './Welcome'

function App() {
  const [displayWelcome, setDisplayWelcome] = useState(true)
  const newGrid = useSelector((reduxStore) => reduxStore.newGrid)

  useEffect(() => {
    if (newGrid) {
      setDisplayWelcome(false)
    }
  }, [newGrid])

  return (
    <>
      <MenuAppBar />
      <SnackMessage />
      <NewSudokuModal />
      <section className="main">
        {displayWelcome ? <Welcome /> : <SudokuGrid />}
      </section>
    </>
  )
}

export default App
