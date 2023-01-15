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
    const [textErrorCount, setTextErrorCount] = useState(0);

    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

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
        calculateAccuracy();
    }, [timeInSeconds]);

    const calculateCharactersPerMinute = () => {
        setCharactersPerMinute( Math.floor(numberOfCharacters / (timeInSeconds / MINUTE)) );
    };

    const calculateWordsPerMinute = () => {
        setWordsPerMinute( Math.floor( (numberOfCharacters / MIDDLE_QUANTITY_CHAR_IN_WORD) / (timeInSeconds / MINUTE) ) );
    };

    const calculateAccuracy = () => {
        setAccuracy( Math.floor((1 - textErrorCount / numberOfCharacters) * 100) );
    };

    const handleChangeNumberOfCharacters = () => {
        setNumberOfCharacters((prevState) => prevState + 1);
    };

    const handleChangeTextErrorCount = () => {
        setTextErrorCount((prevState) => prevState + 1);
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <TypingContainer
                        setNumberOfChar={handleChangeNumberOfCharacters}
                        setTextErrorCount={handleChangeTextErrorCount}
                    />
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
                                Accuracy: {accuracy ? accuracy : 100}%
                            </Typography>
                            <Typography
                                sx={{
                                    borderBottom: 1,
                                    borderColor: 'divider',
                                }}
                                variant="subtitle2"
                                gutterBottom component="div"
                            >
                                Error count: {textErrorCount ? textErrorCount : 0}
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