import React from 'react';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Code from "../../images/Code.svg";
import Box from "@mui/material/Box";

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
                    }}>
                        <h1>section 1</h1>
                    </Box>
                </Grid>
                <Grid sx={{background: "gray"}} item xs={6}>
                    <img
                        style={{margin: "2rem"}}
                        src={Code}
                        alt="Code"
                    />
                </Grid>
                <Grid sx={{background: "yellow"}} item xs={6}>
                    <h1>section 3</h1>
                </Grid>
                <Grid sx={{background: "red"}} item xs={6}>
                    <h1>section 4</h1>
                </Grid>
                <Grid sx={{background: "green"}} item xs={6}>
                    <h1>section 5</h1>
                </Grid>
                <Grid sx={{background: "purple"}} item xs={6}>
                    <h1>section 6</h1>
                </Grid>
            </Grid>
        </Container>
    );
}