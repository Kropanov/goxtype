import React, {useEffect, useState} from 'react';
import TextContainer from "./TextContainer/TextContainer";
import InputTextField from "./InputTextField/InputTextField";
import {Char, TextFieldColor} from "../../types/Types";

const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

type TypingContainerProps = {
    setCurrentCharCount: () => void;
    setTextErrorCount: () => void;
};

type EventType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TypingContainer(props: TypingContainerProps) {
    const {setCurrentCharCount, setTextErrorCount} = props;

    const [text, setText] = useState<Char[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [currentChar, setCurrentChar] = useState<string>("");

    const [textFieldValue, setTextFieldValue] = useState("");
    const [textFieldColor, setTextFieldColor] = useState<TextFieldColor>("primary");

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


    const handleChangeTextValue = (event: EventType) => {
        setTextFieldValue(event.target.value);

        if (!isEqualTextValue(event)) {
            calledTypingError();
            return;
        }

        setupTextFieldWithCorrectValue();

        if (isLastChar()) {
            return;
        }

        updateCurrentTextFieldState();
    };

    const isEqualTextValue = (event: EventType) => {
        return event.target.value === currentChar;
    };

    const calledTypingError = () => {
        if (textFieldColor === "error") return;
        setTextErrorCount();
        setTextFieldColor("error");
    };

    const setupTextFieldWithCorrectValue = () => {
        setCurrentCharCount();
        changeCharColor(index);
        setTextFieldColor("primary");
        chooseNextChar();
    };

    const changeCharColor = (index: number) => {
        const item = {...text[index], colored: true};
        const result = [...text];
        result[index] = item;
        setText(result);
    };

    const chooseNextChar = () => {
        setIndex((prev) => prev + 1);
    };

    const isLastChar = () => {
        return index+1 === text.length;
    };

    const updateCurrentTextFieldState = () => {
        setCurrentChar(text[index+1].char);
        cleanTextField();
    };

    const cleanTextField = () => {
        setTextFieldValue("");
    };

    return (
        <>
            <TextContainer text={text} />
            <InputTextField
                onChangeValue={(event) => handleChangeTextValue(event)}
                textFieldValue={textFieldValue}
                textFieldColor={textFieldColor}
            />
        </>
    );
}