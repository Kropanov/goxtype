import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Practice() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    Some text
                </Grid>
            </Grid>
        </Container>
    );
}