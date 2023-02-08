import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });
import express, { Express, Request, Response } from 'express';
import mongoose from "mongoose";

const DATABASE = process.env.DATABASE || "";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
const PORT = process.env.PORT || 3001;

const app: Express = express();

const DB = DATABASE.replace(
    "<password>",
    DATABASE_PASSWORD
);

mongoose.set('strictQuery', true);
mongoose.connect(DB)
    .then(() => {
        console.log('Connected!');
    })
    .catch(err => {
        console.log(err);
    });

app.get("/user", (req: Request, res: Response) => {
    res.json({ message: "Hello from Express!" });
});

app.listen( PORT, () => {
    console.log( `Server listening on ${PORT}...` );
} );