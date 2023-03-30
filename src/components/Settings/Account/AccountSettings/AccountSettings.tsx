import React, { useContext, useState } from 'react';
import {
    Avatar,
    Button,
    Divider,
    FormControl,
    FormGroup,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NotificationContext } from '../../../Notification/NotificationContext/NotificationContext';
import {API_ROUTES, NOTIFICATION, TOKEN_KEY} from '../../../../constants/Constants';

export default function AccountSettings() {
    const {dispatch} = useContext(NotificationContext);

    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    // TODO: create loader
    // const [loading, setLoading] = useState(false);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChangePassword =  async (event: React.MouseEvent<HTMLButtonElement>) => {

        if (emptyFields()) {
            dispatch({type: NOTIFICATION.EMPTY_FIELDS});
            return;
        }

        if (differentPasswords()) {
            dispatch({type: NOTIFICATION.FAIL_VALIDATION_PASSWORD});
            return;
        }

        const response = await fetch(API_ROUTES.PROFILE, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`
            },
            body: JSON.stringify({
                currentPassword,
                newPassword
            })
        } );

        switch (response.status) {
            case 200:
                dispatch({type: NOTIFICATION.SUCCESS_UPDATE_PASSWORD});            
                break;
            default:
                dispatch({type: NOTIFICATION.ERROR});
                return;
        }

        clearTextFields();
        event.preventDefault();
    };

    const emptyFields = () => currentPassword === "" || newPassword === "" || confirmNewPassword === "";
    const differentPasswords = () => newPassword !== confirmNewPassword;

    const clearTextFields = () => {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    };

    return (
        <>
            <Grid item sm={8} xs={12}>
                <FormControl variant="standard">
                    <InputLabel
                        htmlFor="component-name"
                        variant="outlined"
                        size="small"
                    >
                        Name
                    </InputLabel>
                    <OutlinedInput
                        id="component-name"
                        defaultValue="Brave Heart"
                        label="Name"
                        size="small"
                    />
                    <FormHelperText id="component-name-helper-text" variant="filled">
                        Your name may appear around on site where you win round or complete pack
                    </FormHelperText>
                    <Button variant="text">
                        Update name
                    </Button>
                </FormControl>

                <Typography sx={{mt: 1}} variant="subtitle1">
                    Password
                </Typography>
                <Divider />

                <FormGroup>
                    <OutlinedInput 
                        sx={{mb: 1, mt: 2}}
                        type={showPassword ? 'text' : 'password'}
                        value={currentPassword}
                        autoComplete="current-password"
                        onChange={(event) => setCurrentPassword(event.target.value)}
                        id="old-password" 
                        placeholder="Old password"
                        size="small"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle old password visibility"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    
                    <OutlinedInput 
                        sx={{mb: 1}} 
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        type={showNewPassword ? 'text' : 'password'}
                        id="new-password" 
                        placeholder="New password"
                        size="small" 
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle old password visibility"
                                    onClick={() => setShowNewPassword((prev) => !prev)}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    
                    <OutlinedInput 
                        sx={{mb: 1}} 
                        value={confirmNewPassword} 
                        onChange={(event) => setConfirmNewPassword(event.target.value)}
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="repeated-new-password" 
                        placeholder="Confirm new password"
                        size="small"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle old password visibility"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                    <Button onClick={handleChangePassword} variant="outlined">
                        Update password
                    </Button>
                </FormGroup>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Grid
                    container
                    justifyContent={{xs: 'space-around'}}
                    alignItems="center"
                    direction={{xs: "column"}}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="https://source.unsplash.com/random"
                        sx={{
                            width: {lg: 200, md: 160, sm: 100, xs: 200},
                            height: {lg: 200, md: 160, sm: 100, xs: 200},
                        }}
                    />
                    <Button sx={{mt: 1}} variant="text">
                        Upload a photo
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}