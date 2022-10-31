import Box from '@mui/material/Box';
import React from 'react';
import {Button, IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Title from "../Title/Title";
import {SIGN_UP} from "../../../../constants/Constants";
import useSignUp from "../../../../hooks/SignUp/SignUp";
import SocialLogin from "../SocialLogin/SocialLogin";

export default function SignUp() {

    const {
        showPassword,
        showConfirmPassword,
        handleClickShowPassword,
        handleClickShowConfirmPassword,
        handleMouseDownPassword,
        handleSubmit,
    } = useSignUp();

    return (
        <>
            <Title message={"Please sign up to use platform"} stage={SIGN_UP} />
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
                    <OutlinedInput
                        sx={{ marginTop: '20px'}}
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="password-repeat"
                        autoComplete="current-password"
                        placeholder="Confirm Password"
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
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        sx={{ margin: '20px 0 0'}}
                        variant="outlined"
                        type="submit"
                    >
                        Create An Account
                    </Button>
                </Box>
            </form>
            <SocialLogin />
        </>
    );
}