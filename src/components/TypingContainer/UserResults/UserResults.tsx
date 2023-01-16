import React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

type UserResultsProps = {
    charactersPerMinute: number;
    wordsPerMinute: number;
    accuracy: number;
    textErrorCount: number;
    currentCharCount: number;
    timeInSeconds: number;
};

export default function UserResults(props: UserResultsProps) {
    const {
        charactersPerMinute,
        wordsPerMinute,
        accuracy,
        textErrorCount,
        currentCharCount,
        timeInSeconds
    } = props;

    const results = [ `CPM: ${ charactersPerMinute ? charactersPerMinute : 0}`,
                    `WPM: ${ wordsPerMinute ? wordsPerMinute : 0}`,
                    `Accuracy: ${accuracy ? accuracy : 100}%`,
                    `Error count: ${textErrorCount ? textErrorCount : 0}`,
                    `Character count: ${currentCharCount}`,
                    `Time: ${timeInSeconds}`];

    return (
        <Box>
            { results.map((result, index) => (
                <Typography
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}
                    variant="subtitle2"
                    gutterBottom component="div"
                    key={index}
                >
                    {result}
                </Typography>
            ) ) }
        </Box>
    );
}