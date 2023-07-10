import React from 'react';
import {
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography, useTheme
} from "@mui/material";
import { ColorModeContext } from '../../../../hooks/Theme/Theme';

export default function ThemeSettings() {

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

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
                    defaultValue="Light"
                    name="theme-label-group"
                >
                    <FormControlLabel value="Dark" checked={theme.palette.mode === 'dark'} onClick={colorMode.toggleColorMode} control={<Radio />} label="Dark" />
                    <FormControlLabel value="Light" checked={theme.palette.mode === 'light'} onClick={colorMode.toggleColorMode} control={<Radio />} label="Light" />
                </RadioGroup>
            </FormControl>
        </Grid>
    );
}