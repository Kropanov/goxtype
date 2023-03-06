import React from "react";
import {Box, Button, Container, Grid, Paper, Skeleton, Typography} from "@mui/material";

export default function PracticePacks() {
    return (
        // ToDo: May be you should rework this because cards seems better
        <Container maxWidth="md">
            <Box sx={{ height: 80, m: 2}}>
                <Paper elevation={5}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <h1>1</h1>
                        <Typography variant="h6">
                            Different Languages
                        </Typography>
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Start Practice
                        </Button>
                    </Grid>
                </Paper>
            </Box>
            <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={80} />
            <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={80} />
            <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={80} />
            <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={80} />
            <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={80} />
            <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={80} />
            <Skeleton sx={{m: 2}} animation="wave" variant="rounded" height={80} />
        </Container>
    );
}