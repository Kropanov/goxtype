import Box from '@mui/material/Box';
import React from 'react';
import {Button, IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useRouter} from "../../../../hooks/Router/Router";
import {LOG_IN} from "../../../../constants/Constants";
import Title from "../Title/Title";

export default function LogIn() {

    // Todo: create separate hook when refactoring
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => (!prev));
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log('This thing was submitted!');
        router.push('/main');
        e.preventDefault();
    };

    return (
        <>
            <Title message={"Please log in to use platform"} procedure={LOG_IN} />
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
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        sx={{ margin: '20px 0 0'}}
                        variant="outlined"
                        type="submit"
                    >
                        Log In
                    </Button>
                </Box>
            </form>
        </>
    );
}