import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";

type LogoProps = {
    width?: number,
    height?: number,
    blackLogo?: boolean
};

function Logo(props: LogoProps) {

    const {width, height, blackLogo} = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    // TODO: we need to change some logic in this piece of code
    const mode =  prefersDarkMode ? "Logo.png" : "BlackLogo.png";

    return (
        <img
            src={blackLogo ? mode : "Logo.png"}
            alt="logo"
            width={width != null ? width : 24}
            height={height != null ? height : 24}
        />
    );
}

export default Logo;