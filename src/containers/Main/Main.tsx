import React from 'react';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Code from "../../images/Code.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";

export default function Main() {
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={6}>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <Paper
                            elevation={4}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                p: 3
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
                <Grid  item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
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
                {/*<Grid sx={{background: "yellow"}} item xs={6}>*/}
                {/*    <h1>section 3</h1>*/}
                {/*</Grid>*/}
                {/*<Grid sx={{background: "red"}} item xs={6}>*/}
                {/*    <h1>section 4</h1>*/}
                {/*</Grid>*/}
                {/*<Grid sx={{background: "green"}} item xs={6}>*/}
                {/*    <h1>section 5</h1>*/}
                {/*</Grid>*/}
                {/*<Grid sx={{background: "purple"}} item xs={6}>*/}
                {/*    <h1>section 6</h1>*/}
                {/*</Grid>*/}
            </Grid>
        </Container>
    );
}