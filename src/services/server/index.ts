// const dotenv = require('dotenv').config({ path: "./config.env" });
// const mongoose = require('mongoose');
// const express = require('express');
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });
import express, { Express, Request, Response } from 'express';

const app: Express = express();

// console.log(process.env.DATABASE_PASSWORD);


// const DB = process.env.DATABASE.replace(
//     "<password>",
//     process.env.DATABASE_PASSWORD
// );
//
// mongoose.set('strictQuery', true);
// mongoose.connect(DB)
//     .then(() => {
//         console.log('Connected!');
//     });

app.get("/user", (req: Request, res: Response) => {
    res.json({ message: "Hello from Express!" });
});

const PORT = process.env.PORT || 3001;

app.listen( PORT, () => {
    console.log( `Server listening on ${PORT}...` );
} );