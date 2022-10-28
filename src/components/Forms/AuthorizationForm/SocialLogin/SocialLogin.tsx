import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialLogin() {
    return (
        <>
            <Typography variant="subtitle2" gutterBottom component="span">
                or connect with
            </Typography>
            <Box
                sx={{
                    borderTop: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <IconButton aria-label="Facebook">
                    <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="Google">
                    <GoogleIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="YouTube">
                    <YouTubeIcon fontSize="large"/>
                </IconButton>
                <IconButton aria-label="GitHub">
                    <GitHubIcon fontSize="large" />
                </IconButton>
            </Box>
        </>
    );
}