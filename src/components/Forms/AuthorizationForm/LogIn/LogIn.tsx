import Box from '@mui/material/Box';
import React from 'react';
import {Button, Fade, IconButton, InputAdornment, LinearProgress, Link, OutlinedInput, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {LOG_IN} from "../../../../constants/Constants";
import Title from "../Title/Title";
import useLogIn from "../../../../hooks/LogIn/LogIn";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SocialLogin from "../SocialLogin/SocialLogin";

export default function LogIn() {
    const {
        checked,
        loading,
        showPassword,
        handleChangeCheckBoxValue,
        passwordTextFieldValue,
        emailTextFieldValue,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleSubmitLoginForm,
        handleClickShowForgotPassword,
        handleChangeEmailValue,
        handleChangePasswordValue,
    } = useLogIn();

    return (
        <>
            <Title message={"Please log in to use platform"} stage={LOG_IN} />
            <form onSubmit={handleSubmitLoginForm}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField
                        id="login"
                        label="Email / Login"
                        variant="outlined"
                        value={emailTextFieldValue}
                        onChange={(event) => handleChangeEmailValue(event.target.value)}
                    />
                    <OutlinedInput
                        sx={{ marginTop: '20px'}}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={passwordTextFieldValue}
                        onChange={(event) => handleChangePasswordValue(event.target.value)}
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
                                    onChange={handleChangeCheckBoxValue}
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
                <Fade
                    appear
                    in={loading}
                    style={{
                        transitionDelay: loading ? '800ms' : '0ms',
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                </Fade>
            </form>
            <SocialLogin />
        </>
    );
}