import { useEffect, useState } from 'react';

import { MIDDLE_QUANTITY_CHAR, MINUTE } from '../../constants/Constants';
import { scrollPageUp } from '../../func';

export default function usePractice() {
    const [charactersPerMinute, setCharactersPerMinute] = useState(0);
    const [wordsPerMinute, setWordsPerMinute] = useState(0);

    const [currentCharCount, setCurrentCharCount] = useState(0);
    const [textErrorCount, setTextErrorCount] = useState(0);

    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    useEffect(() => {
        scrollPageUp();
        const myInterval = setInterval(() => {
            setTimeInSeconds((prevState) => prevState + 1);
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    }, []);

    useEffect(() => {
        calculateCharactersPerMinute();
        calculateWordsPerMinute();
        calculateAccuracy();
    }, [timeInSeconds]);

    const calculateCharactersPerMinute = () => {
        setCharactersPerMinute(Math.floor(currentCharCount / (timeInSeconds / MINUTE)));
    };

    const calculateWordsPerMinute = () => {
        setWordsPerMinute(Math.floor(currentCharCount / MIDDLE_QUANTITY_CHAR / (timeInSeconds / MINUTE)));
    };

    const calculateAccuracy = () => {
        setAccuracy(Math.floor((1 - textErrorCount / currentCharCount) * 100));
    };

    const handleChangeCurrentCharCount = () => {
        setCurrentCharCount((prevState) => prevState + 1);
    };

    const handleChangeTextErrorCount = () => {
        setTextErrorCount((prevState) => prevState + 1);
    };

    return {
        handleChangeCurrentCharCount,
        handleChangeTextErrorCount,
        charactersPerMinute,
        wordsPerMinute,
        currentCharCount,
        textErrorCount,
        timeInSeconds,
        accuracy,
    };
}
