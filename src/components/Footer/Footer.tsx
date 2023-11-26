import { Box, Divider, Paper } from '@mui/material';
import React from 'react';

import Links from './Links/Links';
import SocialNetworks from './SocialNetworks/SocialNetworks';

export function Footer() {
    return (
        // TODO: create box component like body element
        <Box sx={{ mt: 'auto' }}>
            <Paper elevation={4}>
                <Links />
                <Divider />
                <SocialNetworks />
            </Paper>
        </Box>
    );
}
