import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';

import Icons from '../Icons';

export default function SettingsIcons() {
    const data = [
        {
            element: <RestartAltIcon fontSize="large" />,
            label: 'Google',
        },
        {
            element: <BookmarkBorderIcon fontSize="large" />,
            label: 'YouTube',
        },
        {
            element: <SettingsIcon fontSize="large" />,
            label: 'GitHub',
        },
    ];

    return <Icons data={data} />;
}
