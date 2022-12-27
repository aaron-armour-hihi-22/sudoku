import { combineReducers } from 'redux'

import selectedCellIndex from './selectedCellIndex'
import cells from './cells'
import numEmptyCells from './numEmptyCells'

export default combineReducers({
  selectedCellIndex,
  cells,
  numEmptyCells,
})
