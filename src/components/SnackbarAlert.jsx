import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const SnackbarAlert = ({ open, handleClose }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Text has been copied">
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Text has been copied
            </Alert>
        </Snackbar>
    )
}

export default SnackbarAlert