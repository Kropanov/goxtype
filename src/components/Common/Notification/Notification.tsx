import React, {useEffect, useState} from 'react';
import Alert from '@mui/material/Alert';
import {Collapse, Paper} from "@mui/material";
import {Severity} from "../../../types/Types";

type NotificationProps = {
    severity: Severity;
    message: string;
};

function Notification(props: NotificationProps) {
    const {severity, message} = props;
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const timeId = setTimeout(() => {
            handleCloseAlert();
        }, 3000);

        return () => {
            clearTimeout(timeId);
        };
    });

    const handleCloseAlert = () => {
        setOpen(false);
    };

    return (
        <Paper sx={{position: 'fixed', right: 10, bottom: 10}}>
            <Collapse in={open}>
                <Alert variant="outlined" severity={severity} onClose={handleCloseAlert}>
                    {message}
                </Alert>
            </Collapse>
        </Paper>
    );
}

export default Notification;