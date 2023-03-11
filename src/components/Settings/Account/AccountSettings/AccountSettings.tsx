import React from 'react';
import {
    Avatar,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";

export default function AccountSettings() {
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

                    <Typography sx={{mt: 1}} variant="subtitle1">
                        Password
                    </Typography>
                    <Divider />

                    <TextField sx={{mb: 1, mt: 2}} id="password" label="Old password" variant="outlined" size="small" />
                    <TextField sx={{mb: 1}} id="repeated-password" label="New password" variant="outlined" size="small" />
                    <TextField sx={{mb: 1}} id="new-password" label="Confirm new password" variant="outlined" size="small" />

                    <Button variant="outlined">
                        Update password
                    </Button>
                </FormControl>
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