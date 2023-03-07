import React from "react";
import {
    Avatar,
    Button,
    Card, CardActions, CardContent, CardHeader, CardMedia,
    Container,
    IconButton,
    Typography
} from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PackImage from "../../images/english-pack-big-ben.jpg";

export default function PracticePacks() {
    return (
        // ToDo: May be you should rework this because cards seems better
        <Container maxWidth="md">
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
                    title="Brave Heart"
                    subheader="March 7, 2023"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={PackImage}
                    alt="Pack Image"
                />
                <CardContent>
                    <Typography sx={{mb: 1}} variant="h5" color="text.primary">
                        English pack
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
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
        </Container>
    );
}