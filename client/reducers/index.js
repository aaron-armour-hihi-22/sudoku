import { combineReducers } from 'redux'

import selectedCellIndex from './selectedCellIndex'
import cells from './cells'
import modalOpen from './modalOpen'
import numEmptyCells from './numEmptyCells'
import newGrid from './newGrid'
import snackMsg from './snackMsg'

export default combineReducers({
  selectedCellIndex,
  cells,
  modalOpen,
  numEmptyCells,
  newGrid,
  snackMsg,
})
