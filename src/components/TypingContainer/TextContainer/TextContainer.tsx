import React, {useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

const string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum";


export default function TextContainer() {

    const [text, setText] = useState<string[]>([]);

    useEffect(() => {
        (() => {
            setText(string.split(""));
        })();
    }, []);

    return (
        <Paper sx={{m: 3, p: 2}} elevation={4}>
            {
                text.map((char, index) => (
                    <Typography
                        key={index}
                        variant="h6"
                        component="span"
                    >
                        {char}
                    </Typography>
                ))
            }
        </Paper>
    );
}