import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Fade, IconButton, InputAdornment, LinearProgress, OutlinedInput, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

import { SIGN_UP } from '../../../../constants/Constants';
import useSignUp from '../../../../hooks/SignUp/SignUp';
import SocialLogin from '../SocialLogin/SocialLogin';
import Title from '../Title/Title';

export default function SignUp() {
    const {
        loading,
        showPassword,
        handleSubmit,
        showConfirmPassword,
        handleClickShowPassword,
        handleClickShowConfirmPassword,
        handleMouseDownPassword,
        emailTextFieldValue,
        passwordTextFieldValue,
        confirmPasswordTextFieldValue,
        handleChangeEmailValue,
        handleChangePasswordValue,
        handleChangeConfirmPasswordValue,
    } = useSignUp();

    return (
        <>
            <Title message={'Please sign up to use platform'} stage={SIGN_UP} />
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        id="login"
                        label="Email / Login"
                        variant="outlined"
                        value={emailTextFieldValue}
                        onChange={(event) => handleChangeEmailValue(event.target.value)}
                    />
                    <OutlinedInput
                        sx={{ marginTop: '20px' }}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        value={passwordTextFieldValue}
                        onChange={(event) => handleChangePasswordValue(event.target.value)}
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
                    <OutlinedInput
                        sx={{ marginTop: '20px' }}
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="password-repeat"
                        autoComplete="current-password"
                        placeholder="Confirm Password"
                        value={confirmPasswordTextFieldValue}
                        onChange={(event) => handleChangeConfirmPasswordValue(event.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{ margin: '10px 0' }} variant="outlined" type="submit">
                        Create An Account
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
