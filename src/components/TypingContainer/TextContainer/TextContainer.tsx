import React from 'react';
import classes from "./TextContainer.module.scss";
import {Char} from "../../../types/Types";
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Container,
    Paper,
    Box,
    Divider
} from "@mui/material";



type TextContainerProps = {
    text: Char[]
};

export default function TextContainer(props: TextContainerProps) {
    const {text} = props;
    return (
        <Container sx={{mt: 2, mb: 4}}>
            <Paper elevation={4}>
                <Box sx={{display: 'flex'}}>
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
                    <Box sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <IconButton>
                            <AccountCircleIcon fontSize="large" />
                        </IconButton>
                            <Divider />
                        <IconButton>
                            <MilitaryTechIcon fontSize="large" />
                        </IconButton>
                            <Divider />
                        <IconButton>
                            <RestartAltIcon fontSize="large" />
                        </IconButton>
                            <Divider />
                        <IconButton>
                            <BookmarkBorderIcon fontSize="large" />
                        </IconButton>
                            <Divider />
                        <IconButton>
                            <SettingsIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}