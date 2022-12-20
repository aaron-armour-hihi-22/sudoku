import { combineReducers } from 'redux'

import selectedCellIndex from './selectedCellIndex'
import cells from './cells'

export default combineReducers({
  selectedCellIndex,
  cells,
})
