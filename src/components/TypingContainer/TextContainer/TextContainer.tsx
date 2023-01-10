import React from 'react';
import classes from "./TextContainer.module.scss";
import {Char} from "../../../types/Types";
import {
    Container,
    Paper,
    Box,
} from "@mui/material";
import SettingsIcons from "../../Icons/SettingsIcons/SettingsIcons";



type TextContainerProps = {
    text: Char[]
};

export default function TextContainer(props: TextContainerProps) {
    const {text} = props;
    return (
        <Container sx={{mt: 2, mb: 4}}>
            <Paper elevation={2}>
                <Box sx={{display: 'flex'}}>
                    <Paper elevation={4}>
                        <Box sx={{fontSize: '23px', fontWeight: 500, p: 2, pr: 0}}>
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
                        </Box>
                    </Paper>
                    <Box sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>
                        <SettingsIcons />
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}