import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function Welcome() {
  return (
    <Card sx={{ width: '60vw' }}>
      <CardContent>
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          Welcome to Aaron&apos;s Sudoku App!
        </Typography>
        <Typography sx={{ mb: 1 }}>
          To get started, please click on the menu icon in the top left of the
          menu, and then select &quot;New Sudoku&quot;.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Once you have chosen the level of challenge, you will get a 9&times;9
          grid with some digits filled in. Inside the grid are nine 3&times;3
          subsquares.{' '}
          <b>
            The objective of sudoku is to fill in the missing digits (using 1-9)
            so that each row, column and subsquare contains each digit 1-9
            exactly once.
          </b>{' '}
          In other words, no row, column or subsquare can double up on a digit.
          When every cell has been filled and this condition has been met, you
          have successfully completed the sudoku. For more information on how to
          play sudoku please see{' '}
          <a
            href="https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/"
            target={'_blank'}
            rel={'noreferrer'}
          >
            this article
          </a>
          .
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Any of the cells which are not initially assigned a value can be
          clicked, and a dropdown menu will appear. Clicking on the dropdown
          menu gives you options for the digits 1-9, or to clear the current
          value. Or after clicking on a cell, you can use the keyboard keys 1-9
          to select that digit, and delete or backspace to clear the current
          value. If you select a cell and enter a value that conflicts with
          other values in the same row, column, or subsquare, then these cells
          will be highlighed with a red background colour.
        </Typography>
        <Typography align="center" sx={{ fontSize: 20 }}>
          Good luck and have fun! &#128515;
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Welcome
