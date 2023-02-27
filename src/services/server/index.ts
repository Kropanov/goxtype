import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });
import express, { Express } from 'express';
import bodyParser from "body-parser";
import {UserRoutes} from "../users/routes/users.routes.js";
import {CommonRoutesConfig} from "../common/routes/routes.config.js";

const app: Express = express();
const routes: Array<CommonRoutesConfig> = [];
app.use(bodyParser.json());

routes.push(new UserRoutes(app));

const PORT = process.env.PORT || 3001;
app.listen( PORT, () => {
    console.log( `Server listening on ${PORT}...` );
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
} );