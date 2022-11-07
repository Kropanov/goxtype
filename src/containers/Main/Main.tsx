import React from 'react';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Code from "../../images/Code.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, CardMedia, Paper} from "@mui/material";

const cards = [1, 2, 3];

export default function Main() {
    return (
        <>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
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
                    <Grid  item xs={12} lg={6}>
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
            <Container sx={{ py: 6 }} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <Paper elevation={4}>
                                    <CardMedia
                                        component="img"
                                        // sx={{
                                        //     // 16:9
                                        //     pt: '56.25%',
                                        // }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
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