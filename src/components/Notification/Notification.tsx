import React, {useContext, useEffect} from 'react';
import Alert from '@mui/material/Alert';
import {Collapse, Paper} from "@mui/material";
import {NotificationContext} from "./NotificationProvider/NotificationContext";

function Notification() {
    const {notificationState, setNotificationState} = useContext(NotificationContext);

    useEffect(() => {
        const timeId = setTimeout(() => {
            handleCloseAlert();
        }, 3000);

        return () => {
            clearTimeout(timeId);
        };
    });

    const handleCloseAlert = () => {
        setNotificationState({...notificationState, open: false});
    };

    return (
        <Paper sx={{position: 'fixed', right: 10, bottom: 10}}>
            <Collapse in={notificationState.open}>
                <Alert variant="filled" severity={notificationState.severity} onClose={handleCloseAlert}>
                    {notificationState.message}
                </Alert>
            </Collapse>
        </Paper>
    );
}

export default Notification;