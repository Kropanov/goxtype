import React from 'react';
import Logotype from "../../../images/Logo.png";
import BlackLogotype from "../../../images/BlackLogo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

type LogoProps = {
    width?: number,
    height?: number,
    blackLogo?: boolean
};

function Logo(props: LogoProps) {

    const {width, height, blackLogo} = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const mode =  prefersDarkMode ? Logotype : BlackLogotype;

    return (
        <img
            src={blackLogo ? mode : Logotype}
            alt="logo"
            width={width != null ? width : 24}
            height={height != null ? height : 24}
        />
    );
}

export default Logo;