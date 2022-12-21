import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCellValue } from '../actions/cells'
import { clearSelectedCell } from '../actions/selectedCellIndex'

function NumberPicker() {
  const dispatch = useDispatch()
  const selectedCellIndex = useSelector(
    (reduxStore) => reduxStore.selectedCellIndex
  )

  function valueSetter(value) {
    dispatch(setCellValue(selectedCellIndex, value))
    dispatch(clearSelectedCell())
  }

  function optionHandler(event) {
    valueSetter(event.target.value)
  }

  function keyHandler(event) {
    const theKey = event.key

    if (theKey === 'Escape') {
      dispatch(clearSelectedCell())
    } else if ('1' <= theKey && theKey <= '9') {
      valueSetter(Number(theKey))
    } else if (theKey === 'Backspace' || theKey === 'Delete') {
      valueSetter('')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyHandler)

    return () => window.removeEventListener('keydown', keyHandler)
  }, [])

  // Note: add a bogus first option so that onClick fires on any of 1-9
  return (
    <>
      <select onChange={optionHandler}>
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
