import React from 'react';
import {Button, Grid, Typography} from "@mui/material";

export default function CrucialSection() {
    return (
        <Grid item sm={4} xs={12}>
            <Grid
                container
                justifyContent={{xs: 'space-around'}}
                alignItems="center"
                direction={{xs: "column"}}
            >
                <Typography variant="h6" gutterBottom>
                    Dangerous zone
                </Typography>
                <Button variant="outlined" color="error">
                    Delete account
                </Button>
            </Grid>
        </Grid>
    );
}