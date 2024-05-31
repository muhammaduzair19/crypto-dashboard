import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const SnackbarAlert = ({ open, message, severity, handleClose }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarAlert