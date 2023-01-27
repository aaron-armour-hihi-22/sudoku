import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import { useDispatch, useSelector } from 'react-redux'
import { clearSnackMsg } from '../actions/snackMsg'

function TransitionUp(props) {
  return <Slide {...props} direction="up" />
}

function SnackMessage() {
  const snackMsgObj = useSelector((reduxState) => reduxState.snackMsg)
  const open = Boolean(snackMsgObj)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(clearSnackMsg())
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={snackMsgObj?.autoHideDuration}
        open={open}
        TransitionComponent={TransitionUp}
        onClose={handleClose}
        message={snackMsgObj?.message}
      />
    </div>
  )
}

export default SnackMessage
