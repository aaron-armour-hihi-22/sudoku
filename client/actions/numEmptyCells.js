export const INCR_NUM_EMPTY_CELLS = 'INCR_NUM_EMPTY_CELLS'
export const DECR_NUM_EMPTY_CELLS = 'DECR_NUM_EMPTY_CELLS'

export function incrNumEmptyCells() {
  return {
    type: INCR_NUM_EMPTY_CELLS,
  }
}

export function decrNumEmptyCells() {
  return {
    type: DECR_NUM_EMPTY_CELLS,
  }
}
