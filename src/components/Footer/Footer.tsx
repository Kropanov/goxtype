import React from 'react';
import {
    Paper,
    Box,
    Divider
} from "@mui/material";
import Links from "./Links/Links";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

export function Footer() {
    return (
        <Box sx={{mt: "auto"}}>
            <Paper elevation={4}>
                <Links />
                <Divider />
                <SocialNetworks />
            </Paper>
        </Box>
    );
}