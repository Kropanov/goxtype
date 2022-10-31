import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SocialIcons from "../../../Common/SocialIcons/SocialIcons";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialLogin() {
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
        <>
            <Typography
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                }}
                variant="subtitle2"
                gutterBottom component="div"
            >
                or connect with
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 1,
                    mt: 1,
                }}
            >
                <SocialIcons data={SocialIconsData} />
            </Box>
        </>
    );
}