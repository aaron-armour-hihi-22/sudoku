export const SET_NEW_GRID = 'SET_NEW_GRID'
export const UNSET_NEW_GRID = 'UNSET_NEW_GRID'

export function setNewGrid() {
  return {
    type: SET_NEW_GRID,
  }
}

export function unsetNewGrid() {
  return {
    type: UNSET_NEW_GRID,
  }
}
