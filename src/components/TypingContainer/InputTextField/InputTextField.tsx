import React, {useEffect} from 'react';
import {TextField} from "@mui/material";

type InputTextFieldProps = {
    onChangeValue: (event:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textFieldValue: string;
};

export default function InputTextField(props: InputTextFieldProps) {
    const {onChangeValue, textFieldValue} = props;

    useEffect(() => {
        console.log(textFieldValue);
    }, [textFieldValue]);

    return (
        <TextField
            fullWidth
            value={textFieldValue}
            onChange={(event) => onChangeValue(event)}
            label="Please enter text"
        />
    );
}