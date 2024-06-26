import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';

import Icons from '../Icons';

export default function SocialIcons() {
    const data = [
        {
            element: <FacebookIcon fontSize="large" />,
            label: 'Facebook',
        },
        {
            element: <GoogleIcon fontSize="large" />,
            label: 'Google',
        },
        {
            element: <YouTubeIcon fontSize="large" />,
            label: 'YouTube',
        },
        {
            element: <GitHubIcon fontSize="large" />,
            label: 'GitHub',
        },
    ];

    return <Icons data={data} />;
}
