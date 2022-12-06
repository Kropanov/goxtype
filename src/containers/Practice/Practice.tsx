import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TypingContainer from "../../components/TypingContainer/TypingContainer";

export default function Practice() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <TypingContainer />
                </Grid>
            </Grid>
        </Container>
    );
}