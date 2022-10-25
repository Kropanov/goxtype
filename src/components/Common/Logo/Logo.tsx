import React from 'react';
import Logotype from "../../../images/Logo.png";

type LogoProps = {
    width?: number,
    height?: number
};

function Logo(props: LogoProps) {

    const {width, height} = props;

    return (
        <img
            src={Logotype}
            alt="logo"
            width={width != null ? width : 24}
            height={height != null ? height : 24}
        />
    );
}

export default Logo;