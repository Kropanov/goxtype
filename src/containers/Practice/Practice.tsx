import React, {useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TypingContainer from "../../components/TypingContainer/TypingContainer";
import {Box, Paper} from "@mui/material";
import {MINUTE} from "../../constants/Constants";

export default function Practice() {

    const [charactersPerMinute, setCharactersPerMinute] = useState(0);
    const [numberOfCharacters, setNumberOfCharacters] = useState(0);
    const [timeInSeconds, setTimeInSeconds] = useState(0);

    useEffect(()=>{
        const myInterval = setInterval(() => {
            setTimeInSeconds((prevState) => prevState + 1);
        }, 1000);
        return ()=> {
            clearInterval(myInterval);
        };
    });

    useEffect(()=>{
        setCharactersPerMinute( Math.floor(numberOfCharacters / (timeInSeconds / MINUTE)) );
    }, [timeInSeconds, numberOfCharacters]);

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
                    <Container sx={{mt: 2, mb: 4}}>
                        <Paper elevation={4}>
                            <Box sx={{p: 2}}>
                                CPM: {charactersPerMinute}
                            </Box>
                        </Paper>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}