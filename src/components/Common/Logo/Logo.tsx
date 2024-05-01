import { useTheme } from '@mui/material';
import React from 'react';

type LogoProps = {
    width?: number;
    height?: number;
    blackLogo?: boolean;
};

function Logo(props: LogoProps) {
    const theme = useTheme();
    const { width, height, blackLogo } = props;
    const mode = theme.palette.mode === 'dark' ? 'Logo.png' : 'BlackLogo.png';

    return (
        <img
            src={blackLogo ? mode : 'Logo.png'}
            alt="logo"
            width={width != null ? width : 24}
            height={height != null ? height : 24}
        />
    );
}

export default Logo;
