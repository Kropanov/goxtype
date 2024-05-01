import { Box, Typography } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react';

export default function HandlerErrorComponent() {
    return (
        <Container maxWidth="md">
            <Box sx={{ m: 5 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    404 not found
                </Typography>
                <Typography
                    variant="h5"
                    component="h6"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        textOverflow: 'ellipsis',
                        color: 'inherit',
                    }}
                >
                    WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
                </Typography>
            </Box>
        </Container>
    );
}
