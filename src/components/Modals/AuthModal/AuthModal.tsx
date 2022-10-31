import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import {AUTH, LOG_IN, REG, SIGN_UP} from "../../../constants/Constants";
import AuthorizationForm from "../../Forms/AuthorizationForm/AuthorizationForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '500px',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: '0 6px 16px 0 rgb(0 0 0 / 20%)'
};

export default function AuthModal() {
    const [open, setOpen] = useState(false);
    const [stage, setStage] = useState(AUTH);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

     const handleOpenLogIn = () => {
         handleOpen();
         setStage(AUTH);
     };

    const handleOpenSignUp = () => {
        handleOpen();
        setStage(REG);
    };

    return (
        <div>
            <Button
                color="inherit"
                onClick={handleOpenLogIn}
            >
                {LOG_IN}
            </Button>
            <Button
                color="inherit"
                onClick={handleOpenSignUp}
            >
                {SIGN_UP}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <AuthorizationForm tab={stage} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}