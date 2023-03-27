import React, { useEffect, useRef } from 'react';
import {TextField} from "@mui/material";
import {TextFieldColor} from "../../Types/Types";

type InputTextFieldProps = {
    onChangeValue: (event:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textFieldValue: string;
    textFieldColor: TextFieldColor;
};

export default function InputTextField(props: InputTextFieldProps) {
    const {onChangeValue, textFieldValue, textFieldColor} = props;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);
    
    return (
        <TextField
            ref={ref}
            autoComplete="off"
            fullWidth
            value={textFieldValue}
            color={textFieldColor}
            onChange={(event) => onChangeValue(event)}
            label="Please enter text"
        />
    );
}