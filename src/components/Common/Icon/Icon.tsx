import React, {ReactNode} from 'react';
import IconButton from "@mui/material/IconButton";

type IconProps = {
    icon: ReactNode,
    label: string,
};

export default function Icon(props: IconProps) {
    const {icon, label} = props;

    return (
        <IconButton
            aria-label={label}
        >
            { icon }
        </IconButton>
    );
}