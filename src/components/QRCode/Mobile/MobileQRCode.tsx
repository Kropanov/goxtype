import React from 'react';
import {QRCodeSVG} from "qrcode.react";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import InstallMobileIcon from '@mui/icons-material/InstallMobile';

export default function MobileQRCode() {
    return (
        <Container sx={{mb: 4}} maxWidth="md">
            <Paper elevation={4}>
                <Grid sx={{ p: 2 }} container>
                    <Grid item md={12} xs={12}>
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}>
                            <InstallMobileIcon fontSize="large" />
                            <Typography variant="h6">
                                Install our mobile app for additional practice!
                            </Typography>
                            <QRCodeSVG value="https://reactjs.org/" size={100} />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}