import React from 'react';
import {
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";

export default function ThemeSettings() {
    return (
        <Grid item sm={8} xs={12}>
            <Typography variant="h6">
                Theme preferences
            </Typography>
            <Divider />
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="theme-label-group"
                    name="theme-label-group"
                    value="Dark"
                >
                    <FormControlLabel value="Dark" control={<Radio />} label="Dark" />
                    <FormControlLabel value="Light" control={<Radio />} label="Light" />
                </RadioGroup>
            </FormControl>
        </Grid>
    );
}