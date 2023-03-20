import {useContext} from 'react';
import {Alert, Snackbar} from "@mui/material";
import {NotificationContext} from "./NotificationContext/NotificationContext";

function Notification() {
    const {state, setState} = useContext(NotificationContext);
    const {open, severity, message} = state;

    const handleClose = () => {
        setState({
            ...state,
            open: false
        });
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
            <Alert 
                variant="filled" 
                onClose={handleClose}
                severity={severity} 
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Notification;