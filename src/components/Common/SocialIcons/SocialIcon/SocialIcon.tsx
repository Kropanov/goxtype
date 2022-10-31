import React, {ReactNode} from 'react';
import IconButton from "@mui/material/IconButton";

type SocialIconProps = {
    icon: ReactNode,
    label: string,
};

export default function SocialIcon(props: SocialIconProps) {
    const {icon, label} = props;

    return (
        <IconButton
            aria-label={label}
        >
            { icon }
        </IconButton>
    );
}