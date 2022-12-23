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
  if (cell.isAStartingCell) {
    fieldProps['className'] = 'starting-cell'
  }

  if (cell.numConflicts > 0) {
    fieldProps['className'] = 'conflict'
  }

  if (cell.isClickable && selectedCellIndex !== cellIndex) {
    fieldProps['onClick'] = clickHandler
  }

  return (
    <td role="gridcell" {...fieldProps}>
      {selectedCellIndex === cellIndex ? (
        <NumberPicker prevValue={cell.value} />
      ) : (
        cell.value
      )}
    </td>
  )
}

export default Cell
