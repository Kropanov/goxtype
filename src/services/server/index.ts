import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });
import express, { Express } from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {UserRoutes} from "../users/routes/users.routes.js";
import {CommonRoutesConfig} from "../common/routes/routes.config.js";

const DATABASE = process.env.DATABASE || "";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
const PORT = process.env.PORT || 3001;

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

const app: Express = express();
const routes: Array<CommonRoutesConfig> = [];

app.use(bodyParser.json());

routes.push(new UserRoutes(app));

app.listen( PORT, () => {
    console.log( `Server listening on ${PORT}...` );
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
} );