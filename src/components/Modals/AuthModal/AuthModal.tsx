import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import {FORM_TABS, LOG_IN, SIGN_UP} from "../../../constants/Constants";
import AuthorizationForm from "../../Forms/AuthorizationForm/AuthorizationForm";
import {Paper} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '500px',
    transform: 'translate(-50%, -50%)',
};

type AuthModalProps = {
    handleSuccessAuth: () => void;
};

export default function AuthModal(props: AuthModalProps) {
    const {handleSuccessAuth} = props;
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(FORM_TABS.AUTH);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

     const handleOpenLogIn = () => {
         handleOpen();
         setIndex(FORM_TABS.AUTH);
     };

    const handleOpenSignUp = () => {
        handleOpen();
        setIndex(FORM_TABS.REG);
    };

    return (
        <div>
            <Button
                color="inherit"
                sx={{mr: 1}}
                onClick={handleOpenLogIn}
            >
                {LOG_IN}
            </Button>
            <Button
                color="inherit"
                variant="outlined"
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
                        <Paper>
                            <AuthorizationForm
                                tab={index}
                                authModalClose={handleClose}
                                handleSuccessAuth={handleSuccessAuth}
                            />
                        </Paper>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}