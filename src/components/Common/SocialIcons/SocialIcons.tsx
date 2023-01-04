import React from 'react';
import Icon from "../Icon/Icon";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialIcons() {

    const data = [
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
            { data.map((item, index) => (
                <Icon
                    icon={item.icon}
                    key={index}
                    label={item.label}
                />
            ) )}
        </>
    );
}