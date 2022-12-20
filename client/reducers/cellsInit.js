const initialState = [
  {
    row: 0,
    column: 0,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 1,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 2,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 3,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 4,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 5,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 6,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 7,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 0,
    column: 8,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 0,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 1,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 2,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 3,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 4,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 5,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 6,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 7,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 1,
    column: 8,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 0,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 1,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 2,
    subsquare: 0,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 3,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 4,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 5,
    subsquare: 1,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 6,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 7,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 2,
    column: 8,
    subsquare: 2,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 0,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 1,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 2,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 3,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 4,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 5,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 6,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 7,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 3,
    column: 8,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 0,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 1,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 2,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 3,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 4,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 5,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 6,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 7,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 4,
    column: 8,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 0,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 1,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 2,
    subsquare: 3,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 3,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 4,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 5,
    subsquare: 4,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 6,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 7,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 5,
    column: 8,
    subsquare: 5,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 0,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 1,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 2,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 3,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 4,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 5,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 6,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 7,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 6,
    column: 8,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 0,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 1,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 2,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 3,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 4,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 5,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 6,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 7,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 7,
    column: 8,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 0,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 1,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 2,
    subsquare: 6,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 3,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 4,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 5,
    subsquare: 7,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 6,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 7,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
  {
    row: 8,
    column: 8,
    subsquare: 8,
    value: '',
    isClickable: true,
    isAStartingCell: false,
  },
]

module.exports = { initialState }