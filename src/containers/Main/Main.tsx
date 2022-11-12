import React from 'react';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Code from "../../images/Code.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, CardMedia, Paper} from "@mui/material";
import {Challenges} from "../../types/Types";

export const CHALLENGES: Array<Challenges> = [
    {id: 1, complexity: 'Easy', color: "darkgreen"},
    {id: 2, complexity: 'Medium', color: "orange"},
    {id: 3, complexity: 'Hard', color: "red"},
];

export default function Main() {
    return (
        <>
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
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {CHALLENGES.map((challenge) => (
                        <Grid item key={challenge.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <Paper elevation={4}>
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom color={challenge.color} variant="h5" component="h2">
                                            {challenge.complexity}
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" size="small">Solve Challenge</Button>
                                    </CardActions>
                                </Paper>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}