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
import SocialIcons from "../Common/SocialIcons/SocialIcons";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Footer() {

    const SocialIconsData = [
        {
            icon: <FacebookIcon fontSize="large"/>,
            label: "Facebook"
        },
        {
            icon: <GoogleIcon fontSize="large" />,
            label: "Google"
        },
        {
            icon: <YouTubeIcon fontSize="large"/>,
            label: "YouTube"
        },
        {
            icon: <GitHubIcon fontSize="large" />,
            label: "GitHub"
        },
    ];

    return (
        <Box sx={{ mt: "auto"}}>
            <Paper elevation={4}>
                <Grid sx={{ pt: 5, pb: 5}} container justifyContent="center">
                    <Grid
                        item
                        xs={3}
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
                <Grid sx={{ pt: 4, pb: 4}} container justifyContent="center">
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box sx={{ pt: 1, pb: 1 }}>
                            <SocialIcons data={SocialIconsData} />
                        </Box>
                        <Typography>
                            ©Copyright. All rights reserved.
                        </Typography>
                    </Box>
                </Grid>
            </Paper>
        </Box>
    );
}