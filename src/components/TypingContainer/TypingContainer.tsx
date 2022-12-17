import React, {useEffect, useState} from 'react';
import TextContainer from "./TextContainer/TextContainer";
import InputTextField from "./InputTextField/InputTextField";
import {Char} from "../../types/Types";

const string = "Lorem ipsum dolor sit amet, Q";

export default function TypingContainer() {

    const [text, setText] = useState<Char[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [currentChar, setCurrentChar] = useState<string>("");
    const [textFieldValue, setTextFieldValue] = useState("");

    useEffect(() => {
        (() => {
            const result = [];
            for (const s of string) {
                result.push({
                    char: s,
                    colored: false
                });
            }
            setText(result);
            setCurrentChar(result[0].char);
        })();
    }, []);

    const setColor = (index: number) => {
        const item = {...text[index], colored: true};
        const result = [...text];
        result[index] = item;
        setText(result);
    };

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTextFieldValue(event.target.value);

        if (event.target.value === currentChar) {
            setColor(index);
            setIndex((prev) => prev + 1);
            console.log("index", index);

            if (index+1 === text.length) {
                return;
            }

            setCurrentChar(text[index+1].char);
            setTextFieldValue("");
        }
    };

    return (
        <>
            <TextContainer text={text} />
            <InputTextField
                onChangeValue={(event) => handleChangeValue(event)}
                textFieldValue={textFieldValue}
            />
        </>
    );
}