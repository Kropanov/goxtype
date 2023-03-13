import express from "express";
import {body} from "express-validator";
import {CommonRoutesConfig} from "../../common/routes/routes.config.js";
import BodyValidationMiddleware from "../../common/middlewares/body.validation.js";
import AuthMiddlewares from "../middlewares/auth.middlewares.js";
import AuthController from "../controllers/auth.controllers.js";

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
        // TODO: when user's being created then email can existing
        this.app.post(`/signup`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            AuthController.signup
        ]);

        return this.app;
    }
}