import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import { SITE_NAME } from '../../../constants/Constants';
import Logo from '../Logo/Logo';

export default function CompanyLogo() {
    return (
        <Box
            sx={{
                mb: 3,
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Logo blackLogo={true} width={40} height={40} />
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
                {SITE_NAME}
            </Typography>
        </Box>
    );
}
