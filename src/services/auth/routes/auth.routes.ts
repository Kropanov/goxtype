import express from "express";
import {body} from "express-validator";
import {CommonRoutesConfig} from "../../common/routes/routes.config.js";
import BodyValidationMiddleware from "../../common/middlewares/body.validation.js";
import AuthMiddlewares from "../middlewares/auth.middlewares.js";
import AuthController from "../controllers/auth.controllers.js";
import UsersMiddleware from "../../users/middlewares/users.middlewares.js";

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.post(`/login`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            AuthMiddlewares.verifyUserPassword,
            AuthController.login
        ]);

        this.app.post(`/signup`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            UsersMiddleware.validateSameEmailDoesntExist,
            AuthController.signup
        ]);

        return this.app;
    }
}