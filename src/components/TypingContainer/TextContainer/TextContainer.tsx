import { Box, Container } from '@mui/material';
import React from 'react';

import SettingsIcons from '../../Icons/SettingsIcons/SettingsIcons';
import { Char } from '../../Types/Types';
import classes from './TextContainer.module.scss';

type TextContainerProps = {
    text: Char[];
};

export default function TextContainer(props: TextContainerProps) {
    const { text } = props;
    return (
        <Container sx={{ mt: 2, mb: 4 }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ fontSize: '23px', fontWeight: 500, p: 2, pr: 0 }}>
                    {text.map((item, index) => (
                        <span key={index} className={item.colored ? classes.green : undefined}>
                            {item.char}
                        </span>
                    ))}
                </Box>
                <Box
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}
                >
                    <SettingsIcons />
                </Box>
            </Box>
        </Container>
    );
}
