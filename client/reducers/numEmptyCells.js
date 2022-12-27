import { INITIALISE_GRID } from '../actions/cells'
import {
  DECR_NUM_EMPTY_CELLS,
  INCR_NUM_EMPTY_CELLS,
} from '../actions/numEmptyCells'

function reducer(state = 81, action) {
  const { type, payload } = action

  switch (type) {
    case INITIALISE_GRID: {
      const startingValues = payload.split('')
      let numZeroes = 0
      startingValues.forEach((value) => {
        if (value === '0') {
          numZeroes++
        }
      })

      return numZeroes
    }
    case INCR_NUM_EMPTY_CELLS:
      return ++state
    case DECR_NUM_EMPTY_CELLS:
      return --state
    default:
      return state
  }
}

export default reducer
