import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

import { setModalOpen } from '../actions/modalOpen'

function MenuAppBar() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleNewSudoku() {
    setAnchorEl(null)
    dispatch(setModalOpen())
  }

  return (
    <Box sx={{ width: '95vw' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            <MenuItem onClick={handleNewSudoku}>New Sudoku</MenuItem>
          </Menu>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Sudoku
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MenuAppBar
