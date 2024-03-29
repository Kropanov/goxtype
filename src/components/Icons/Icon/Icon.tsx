import React from 'react';
import IconButton from "@mui/material/IconButton";
import {IconType} from '../../Types/Types';

export default function Icon(props: IconType) {
    const {element, label} = props;
    return (
        <IconButton
            aria-label={label}
        >
            { element }
        </IconButton>
    );
}