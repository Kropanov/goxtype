import Box from '@mui/material/Box';
import React from 'react';
import {Button, IconButton, InputAdornment, Link, OutlinedInput, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {LOG_IN} from "../../../../constants/Constants";
import Title from "../Title/Title";
import useLogIn from "../../../../hooks/LogIn/LogIn";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SocialLogin from "../SocialLogin/SocialLogin";

type LogInProps = {
    AuthModalClose: () => void;
    handleSuccessAuth: () => void;
};

export default function LogIn(props: LogInProps) {
    const {AuthModalClose, handleSuccessAuth} = props;

    const {
        showPassword,
        checked,
        handleChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleSubmit,
        handleClickShowForgotPassword
    } = useLogIn(AuthModalClose, handleSuccessAuth);

    return (
        <>
            <Title message={"Please log in to use platform"} stage={LOG_IN} />
            <form onSubmit={handleSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField
                        id="login"
                        label="Email / Login"
                        variant="outlined"
                    />
                    <OutlinedInput
                        sx={{ marginTop: '20px'}}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    name={'forgot_password'}
                                />
                            }
                            label="Remember me"
                        />
                    </FormGroup>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={handleClickShowForgotPassword}
                    >
                        Forgot your password?
                    </Link>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        sx={{ margin: '10px 0'}}
                        variant="outlined"
                        type="submit"
                    >
                        Log In
                    </Button>
                </Box>
            </form>
            <SocialLogin />
        </>
    );
}