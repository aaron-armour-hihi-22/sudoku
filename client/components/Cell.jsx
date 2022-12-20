import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NumberPicker from './NumberPicker'
import { setSelectedCell } from '../actions/selectedCellInddex'

function Cell({ cellIndex }) {
  const dispatch = useDispatch()
  const selectedCellIndex = useSelector(
    (reduxStore) => reduxStore.selectedCellIndex
  )
  const cell = useSelector((reduxStore) => reduxStore.cells[cellIndex])

  function clickHandler() {
    dispatch(setSelectedCell(cellIndex))
  }

  if (selectedCellIndex === cellIndex) {
    return (
      <td role="gridcell">
        <NumberPicker />
      </td>
    )
  } else {
    return (
      <td role="gridcell" onClick={clickHandler} key={cellIndex}>
        {cell.value}
      </td>
    )
  }
}

export default Cell
