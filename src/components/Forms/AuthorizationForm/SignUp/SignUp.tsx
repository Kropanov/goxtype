import Box from '@mui/material/Box';
import React from 'react';
import {Button, IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useRouter} from "../../../../hooks/Router/Router";
import Logo from "../../../Header/Logo/Logo";
import {HEADER_LOGO} from "../../../../constants/Constants";
import Typography from "@mui/material/Typography";

export default function SignUp() {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => (!prev));
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => (!prev));
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('This thing was submitted!');
        router.push('/');
    };

    return (
        <>
            <Box
                sx={{
                    mb: 3,
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Logo width={40} height={40} />
                <Typography
                    variant="h6"
                    noWrap
                    component="h1"
                    sx={{
                        display: { md: 'flex' },
                        fontFamily: 'monospace',
                        fontSize: '2rem',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {HEADER_LOGO}
                </Typography>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="h2"
                sx={{
                    display: { md: 'flex' },
                    fontFamily: 'monospace',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Sing Up
            </Typography>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mb: 3,
                    display: { md: 'flex' },
                    fontFamily: 'monospace',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Please sign up to use platform
            </Typography>
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
        </>
    );
}