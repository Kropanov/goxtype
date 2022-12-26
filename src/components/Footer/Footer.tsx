import React from 'react';
import {Container, Paper} from "@mui/material";

export function Footer() {
    return (
        <Container sx={{mt: "auto"}} maxWidth={false} disableGutters={true}>
            <Paper elevation={4}>
                Footer
            </Paper>
        </Container>
    );
}