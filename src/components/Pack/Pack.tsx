import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {toDefaultDate} from "../../func";
import {PackType} from "../Types/Types";

export default function Pack(props: PackType) {

    const {author, image, date, name, description} = props;
    const [packDate, setPackDate] = useState(date);

    useEffect(() => {
        setPackDate(toDefaultDate(packDate));
    }, []);

    return (
        <Card sx={{m: 2}}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <img src="https://source.unsplash.com/random" alt="Avatar"/>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    </IconButton>
                }
                title={author}
                subheader={packDate}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Pack Image"
            />
            <CardContent>
                <Typography sx={{mb: 1}} variant="h5" color="text.primary">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <BookmarkIcon />
                </IconButton>
                <Button
                    color="primary"
                    variant="outlined"
                    sx={{ml: 'auto'}}
                >
                    Start Practice
                </Button>
            </CardActions>
        </Card>
    );
}