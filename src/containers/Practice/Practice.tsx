import React, {useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TypingContainer from "../../components/TypingContainer/TypingContainer";
import {Box} from "@mui/material";
import {MIDDLE_QUANTITY_CHAR_IN_WORD, MINUTE} from "../../constants/Constants";
import Typography from "@mui/material/Typography";

export default function Practice() {

    const [charactersPerMinute, setCharactersPerMinute] = useState(0);
    const [wordsPerMinute, setWordsPerMinute] = useState(0);

    const [numberOfCharacters, setNumberOfCharacters] = useState(0);
    const [timeInSeconds, setTimeInSeconds] = useState(0);

    useEffect(()=>{
        const myInterval = setInterval(() => {
            setTimeInSeconds((prevState) => prevState + 1);
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    }, []);

    useEffect(()=>{
        calculateCharactersPerMinute();
        calculateWordsPerMinute();
    }, [timeInSeconds]);

    const calculateCharactersPerMinute = () => {
        setCharactersPerMinute( Math.floor(numberOfCharacters / (timeInSeconds / MINUTE)) );
    };

    const calculateWordsPerMinute = () => {
        setWordsPerMinute( Math.floor( (numberOfCharacters / MIDDLE_QUANTITY_CHAR_IN_WORD) / (timeInSeconds / MINUTE) ) );
    };

    const handleChangeNumberOfCharacters = () => {
        setNumberOfCharacters((prevState) => prevState + 1);
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <TypingContainer setNumberOfChar={handleChangeNumberOfCharacters} />
                </Grid>
                <Grid item lg={12}>
                    <Container sx={{mt: 2, mb: 4, p: 2}}>
                            {/* ToDo: this code should be in other component */}
                            <Box>
                                <Typography
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                    }}
                                    variant="subtitle2"
                                    gutterBottom component="div"
                                >
                                    CPM: { charactersPerMinute ? charactersPerMinute : 0}
                                </Typography>
                                <Typography
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                    }}
                                    variant="subtitle2"
                                    gutterBottom component="div"
                                >
                                    WPM: { wordsPerMinute ? wordsPerMinute : 0}
                                </Typography>
                                <Typography
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                    }}
                                    variant="subtitle2"
                                    gutterBottom component="div"
                                >
                                    Accuracy: 100%
                                </Typography>
                                <Typography
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                    }}
                                    variant="subtitle2"
                                    gutterBottom component="div"
                                >
                                    Error count: 0
                                </Typography>
                                <Typography
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                    }}
                                    variant="subtitle2"
                                    gutterBottom component="div"
                                >
                                    Character count: {numberOfCharacters}
                                </Typography>
                            </Box>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}