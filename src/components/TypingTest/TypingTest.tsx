import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

import { useRouter } from '../../hooks/Router/Router';

export default function TypingTest() {
    const router = useRouter();
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={7}>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            pt: { xs: 4 },
                        }}
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                pb: 2,
                                pt: 3,
                                pr: 5,
                                pl: 5,
                            }}
                        >
                            <Typography
                                variant="overline"
                                component="h4"
                                sx={{
                                    fontSize: '2rem',
                                }}
                            >
                                Typing test
                            </Typography>
                            <Typography variant="overline" component="h6">
                                Take a test to determine the level of your typing!
                            </Typography>
                            <Button variant="contained" onClick={() => router.push('/practice')}>
                                Lets get started!
                            </Button>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 3,
                        }}
                    >
                        <img style={{ margin: '2rem' }} src="Code.svg" alt="Code" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
