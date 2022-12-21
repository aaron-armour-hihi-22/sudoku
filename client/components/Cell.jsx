import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NumberPicker from './NumberPicker'
import { setSelectedCell } from '../actions/selectedCellIndex'

function Cell({ cellIndex }) {
  const dispatch = useDispatch()
  const selectedCellIndex = useSelector(
    (reduxStore) => reduxStore.selectedCellIndex
  )
  const cell = useSelector((reduxStore) => reduxStore.cells[cellIndex])

  function clickHandler() {
    dispatch(setSelectedCell(cellIndex))
  }

  const fieldProps = { key: cellIndex }
  if (cell.hasConflict) {
    fieldProps['className'] = 'conflict'
  }

  if (cell.isClickable && selectedCellIndex !== cellIndex) {
    fieldProps['onClick'] = clickHandler
  }

  return (
    <td role="gridcell" {...fieldProps}>
      {selectedCellIndex === cellIndex ? <NumberPicker /> : cell.value}
    </td>
  )
}

export default Cell
