import express from "express";
import { CommonRoutesConfig} from "../../common/routes/routes.config.js";
import UserController from "../controllers/users.controller.js";
import UserMiddleware from "../middlewares/users.middlewares.js";
import AuthMiddleware from "../../auth/middlewares/auth.middlewares.js";
import BodyValidationMiddleware from "../../common/middlewares/body.validation.js";
import {body} from "express-validator";

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/users`)
            .get(UserController.listUsers)
            .post(
                body('email').isEmail(),
                body('password')
                .isLength({ min: 5 })
                .withMessage('Must include password (5+ characters)'),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                UserMiddleware.validateSameEmailDoesntExist,
                UserMiddleware.validateUserRole,
                UserController.createUser);

        // FIXME it's don't work because there is protectRoutes function
        this.app.param(`userId`, UserMiddleware.extractUserId);
        this.app
            .route(`/users/:userId`)
            .all(AuthMiddleware.protectRoutes, UserMiddleware.validateUserExists)
            .get(UserController.getUserById)
            .delete(UserController.removeUser);

        this.app.put(`/users/:userId`, [
            body('email').isEmail(),
            body('password')
            .isLength({ min: 5 })
            .withMessage('Must include password (5+ characters)'),
            body('firstName').isString(),
            body('lastName').isString(),
            body('role').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            UserMiddleware.validateSameEmailBelongToSameUser,
            UserController.put,
        ]);

        this.app.patch(`/users/:userId`, [
            body('email').isEmail().optional(),
            body('password')
            .isLength({ min: 5 })
            .withMessage('Password must be 5+ characters')
            .optional(),
            body('firstName').isString().optional(),
            body('lastName').isString().optional(),
            body('role').isString().optional(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            UserMiddleware.validatePatchEmail,
            UserController.patch
        ]);

        this.app.patch('/profile', [
            body('newPassword')
            .isLength({ min: 5 })
            .withMessage('Password must be 5+ characters')
            .optional(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            AuthMiddleware.protectRoutes,
            UserMiddleware.validateSamePasswordBelongToSameUser,
            UserController.patch
        ]);

        return this.app;
    }
}