import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';

import { NOTIFICATION } from '../../constants/Constants';
import { NotificationContext } from './NotificationContext/NotificationContext';

function Notification() {
    const { state, dispatch } = useContext(NotificationContext);
    const { open, severity, message } = state;

    const handleClose = () => {
        dispatch({ type: NOTIFICATION.HIDE });
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            autoHideDuration={5000}
        >
            <Alert variant="filled" onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Notification;
