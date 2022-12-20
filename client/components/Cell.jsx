import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NumberPicker from './NumberPicker'
import { setSelectedCell } from '../actions/selectedCellInddex'

function Cell({ cellIndex }) {
  const dispatch = useDispatch()
  const selectedCellIndex = useSelector(
    (reduxStore) => reduxStore.selectedCellIndex
  )
  // let selected = false

  function clickHandler() {
    console.log(`Cell ${cellIndex} was clicked`)
    dispatch(setSelectedCell(cellIndex))
  }

  // if (cellIndex === 32) {
  //   selected = true
  // }

  if (selectedCellIndex === cellIndex) {
    return (
      <td role="gridcell">
        <NumberPicker />
      </td>
    )
  } else {
    return <td role="gridcell" onClick={clickHandler} key={cellIndex}></td>
  }
}

export default Cell
