import express from 'express';
import { body } from 'express-validator';

import BodyValidationMiddleware from '../../common/middlewares/body.validation.js';
import { CommonRoutesConfig } from '../../common/routes/routes.config.js';
import UserMiddleware from '../../users/middlewares/users.middlewares.js';
import AuthController from '../controllers/auth.controllers.js';
import AuthMiddleware from '../middlewares/auth.middlewares.js';

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.post(`/login`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            AuthMiddleware.verifyUserPassword,
            AuthController.login,
        ]);

        this.app.post(`/signup`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            UserMiddleware.validateSameEmailDoesntExist,
            UserMiddleware.validateUserRole,
            UserMiddleware.validateUserAvatar,
            AuthController.signup,
        ]);

        return this.app;
    }
}
