import React, {useContext, useEffect} from 'react';
import Alert from '@mui/material/Alert';
import {Box, Collapse} from "@mui/material";
import {NotificationContext} from "./NotificationContext/NotificationContext";
import {HIDE_NOTIFICATION} from "../../constants/Constants";

function Notification() {
    const {state, dispatch} = useContext(NotificationContext);

    useEffect(() => {
        const timeId = setTimeout(() => {
            handleCloseAlert();
        }, 5000);

        return () => {
            clearTimeout(timeId);
        };
    });

    const handleCloseAlert = () => {
        dispatch({type: HIDE_NOTIFICATION});
    };

    return (
        <Box sx={{position: 'fixed', right: {sm: 10}, bottom: {sm: 10}}}>
            <Collapse in={state.open}>
                <Alert variant="filled" severity={state.severity} onClose={handleCloseAlert}>
                    {state.message}
                </Alert>
            </Collapse>
        </Box>
    );
}

export default Notification;