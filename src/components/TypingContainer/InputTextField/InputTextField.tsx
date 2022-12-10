import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";

export default function InputTextField() {

    const [textFieldValue, setTextFieldValue] = useState("");

    const onChangeTextFieldValue = (event:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTextFieldValue(event.target.value);
    };

    useEffect(() => {
        console.log(textFieldValue);
    }, [textFieldValue]);

    return (
        <TextField
            fullWidth
            value={textFieldValue}
            onChange={(event) => onChangeTextFieldValue(event)}
            label="Please enter text"
        />
    );
}