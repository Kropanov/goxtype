import React from 'react';
import {TextField} from "@mui/material";
import {TextFieldColor} from "../../Types/Types";

type InputTextFieldProps = {
    onChangeValue: (event:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textFieldValue: string;
    textFieldColor: TextFieldColor;
};

export default function InputTextField(props: InputTextFieldProps) {
    const {onChangeValue, textFieldValue, textFieldColor} = props;

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