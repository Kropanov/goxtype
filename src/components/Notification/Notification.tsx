import React, {useContext, useEffect} from 'react';
import Alert from '@mui/material/Alert';
import {Collapse, Paper} from "@mui/material";
import {NotificationContext} from "./NotificationContext/NotificationContext";
import {HIDE_NOTIFICATION} from "../../constants/Constants";

function Notification() {
    const {state, dispatch} = useContext(NotificationContext);

    useEffect(() => {
        const timeId = setTimeout(() => {
            handleCloseAlert();
        }, 3000);

        return () => {
            clearTimeout(timeId);
        };
    });

    const handleCloseAlert = () => {
        dispatch({type: HIDE_NOTIFICATION});
    };

    return (
        <Paper sx={{position: 'fixed', right: 10, bottom: 10}}>
            <Collapse in={state.open}>
                <Alert severity={state.severity} onClose={handleCloseAlert}>
                    {state.message}
                </Alert>
            </Collapse>
        </Paper>
    );
}

export default Notification;