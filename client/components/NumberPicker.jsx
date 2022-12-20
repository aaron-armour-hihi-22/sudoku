import React from 'react'
import { useDispatch } from 'react-redux'

import { clearSelectedCell } from '../actions/selectedCellInddex'

function NumberPicker() {
  const dispatch = useDispatch()

  function valueSetter(event) {
    console.log(event.target.value)
    // Set the cell value to the selected value
    dispatch(clearSelectedCell())
  }

  // Note: add a bogus first option so that onClick fires on any of 1-9
  return (
    <>
      <select onChange={valueSetter}>
        <option style={{ display: 'none' }} value="?"></option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={''}></option>
      </select>
    </>
  )
}

export default NumberPicker
