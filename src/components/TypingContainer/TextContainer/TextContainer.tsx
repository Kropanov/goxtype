import React from 'react';
import {Paper} from "@mui/material";
import classes from "./TextContainer.module.scss";
import {Char} from "../../../types/Types";

type TextContainerProps = {
    text: Char[]
};

export default function TextContainer(props: TextContainerProps) {
    const {text} = props;
    return (
        <Paper sx={{m: 3, p: 2, fontSize: '23px', fontWeight: 500}} elevation={4}>
            {
                text.map((item, index) => (
                    <span
                        key={index}
                        className={item.colored ? classes.green : undefined}
                    >
                        {item.char}
                    </span>
                ))
            }
        </Paper>
    );
}