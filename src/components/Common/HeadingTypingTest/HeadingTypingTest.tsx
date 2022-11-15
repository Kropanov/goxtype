import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Code from "../../../images/Code.svg";
import Container from "@mui/material/Container";

export default function HeadingTypingTest() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={7}>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        pt: {xs: 4}
                    }}>
                        <Paper
                            elevation={4}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                pb: 2, pt: 3,
                                pr: 5, pl: 5,
                            }}
                        >
                            <Typography
                                variant="overline"
                                component="h4"
                                sx={{
                                    fontSize: '2rem'
                                }}
                            >
                                Typing test
                            </Typography>
                            <Typography
                                variant="overline"
                                component="h6"
                            >
                                Take a test to determine the level of your typing!
                            </Typography>
                            <Button variant="contained">Let's get started!</Button>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 3
                        }}
                    >
                        <img
                            style={{margin: "2rem"}}
                            src={Code}
                            alt="Code"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}