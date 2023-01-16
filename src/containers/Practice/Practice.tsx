import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TypingContainer from "../../components/TypingContainer/TypingContainer";
import UserResults from "../../components/TypingContainer/UserResults/UserResults";
import usePractice from "../../hooks/Practice/Practice";

export default function Practice() {

    const {
        handleChangeCurrentCharCount,
        handleChangeTextErrorCount,
        charactersPerMinute,
        wordsPerMinute,
        currentCharCount,
        textErrorCount,
        timeInSeconds,
        accuracy,
    } = usePractice();

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <TypingContainer
                        setCurrentCharCount={handleChangeCurrentCharCount}
                        setTextErrorCount={handleChangeTextErrorCount}
                    />
                </Grid>
                <Grid item lg={12}>
                    <Container sx={{mt: 2, mb: 4, p: 2}}>
                        <UserResults
                            charactersPerMinute={charactersPerMinute}
                            wordsPerMinute={wordsPerMinute}
                            accuracy={accuracy}
                            textErrorCount={textErrorCount}
                            currentCharCount={currentCharCount}
                            timeInSeconds={timeInSeconds}
                        />
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}