import React, {useEffect} from 'react';
import {TextField} from "@mui/material";
import {TextFieldColor} from "../../../types/Types";

type InputTextFieldProps = {
    onChangeValue: (event:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textFieldValue: string;
    textFieldColor: TextFieldColor;
};

export default function InputTextField(props: InputTextFieldProps) {
    const {onChangeValue, textFieldValue, textFieldColor} = props;

    useEffect(() => {
        console.log(textFieldValue);
    }, [textFieldValue]);

    return (
        <TextField
            autoComplete="off"
            fullWidth
            value={textFieldValue}
            color={textFieldColor}
            onChange={(event) => onChangeValue(event)}
            label="Please enter text"
        />
    );
}