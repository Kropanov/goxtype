import React, {useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import classes from "./TextContainer.module.scss";

const string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum";

type Char = {
    char: string;
    colored: boolean;
};

export default function TextContainer() {

    const [text, setText] = useState<Char[]>([]);
    const [currentChar, setCurrentChar] = useState<string>("");

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
        })();
    }, []);

    const SetColor = (index: number) => {
        const item = {...text[index], colored: true};
        const result = [...text];
        result[index] = item;
        setText(result);
    };

    return (
        <Paper sx={{m: 3, p: 2, fontSize: '23px', fontWeight: 500}} elevation={4}>
            {
                text.map((item, index) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <span
                        key={index}
                        className={item.colored ? classes.green : classes.white}
                        onClick={() => SetColor(index)}
                    >
                        {item.char}
                    </span>
                ))
            }
        </Paper>
    );
}