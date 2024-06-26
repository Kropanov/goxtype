import { Checkbox, Divider, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import React from 'react';

export default function ProfileSettings() {
    return (
        <Grid item sm={8} xs={12}>
            <Typography variant="h6">Profile settings</Typography>
            <Divider />
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Private profile" />
            </FormGroup>
        </Grid>
    );
}
