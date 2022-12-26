import React from 'react';
import Grid from "@mui/material/Grid";
import {Card, CardActions, CardContent, CardMedia, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {CHALLENGES} from "../../constants/Constants";

export default function Cards() {
    return (
        <Container sx={{mb: 5}} maxWidth="md">
            <Grid container spacing={4}>
                {CHALLENGES.map((challenge) => (
                    <Grid item key={challenge.id} xs={12} sm={6} md={4}>
                        <Paper elevation={4}>
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
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}