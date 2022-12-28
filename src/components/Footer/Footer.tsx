import React from 'react';
import {
    Paper,
    Grid,
    Box,
    ListItemButton,
    List,
    Typography,
    Divider
} from "@mui/material";
import {SITE_NAME} from "../../constants/Constants";
import Logo from "../Common/Logo/Logo";

export function Footer() {
    return (
        <Box sx={{ mt: "auto"}}>
            <Paper elevation={4}>
                <Grid container justifyContent="center">
                    <Grid
                        item
                        xs={4}
                    >
                        <Box
                            sx={{
                                mb: 3,
                                mt: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Logo width={40} height={40} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="h1"
                                sx={{
                                    display: { md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontSize: '2rem',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {SITE_NAME}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <List>
                            <ListItemButton>WEEBLY THEMES</ListItemButton>
                            <ListItemButton>PRE-SALE FAQS</ListItemButton>
                            <ListItemButton>SUBMIT A TICKET</ListItemButton>
                        </List>
                    </Grid>
                    <Grid item xs={2}>
                        <List>
                            <ListItemButton>SERVICES</ListItemButton>
                            <ListItemButton>THEME TWEAK</ListItemButton>
                        </List>
                    </Grid>
                    <Grid item xs={2}>
                        <List>
                            <ListItemButton>SHOWCASE</ListItemButton>
                            <ListItemButton>WIDGETKIT</ListItemButton>
                            <ListItemButton>SUPPORT</ListItemButton>
                        </List>
                    </Grid>
                    <Grid item xs={2}>
                        <List>
                            <ListItemButton>ABOUT US</ListItemButton>
                            <ListItemButton>CONTACT US</ListItemButton>
                                            <ListItemButton>AFFILIATES</ListItemButton>
                            <ListItemButton>RESOURCES</ListItemButton>
                        </List>
                    </Grid>
                </Grid>
                <Divider />
                <Typography>
                    ©Copyright. All rights reserved.
                </Typography>
            </Paper>
        </Box>
    );
}