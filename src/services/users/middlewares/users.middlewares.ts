import argon2 from 'argon2';
import express from 'express';

import { UserRole } from '../../common/constants/constants.js';
import UserService from '../service/users.service.js';

class UserMiddleware {
    async validateSameEmailDoesntExist(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await UserService.getUserByEmail(req.body.email);
        if (user) {
            res.status(400).send({
                message: 'User email already exists!',
            });
        } else {
            next();
        }
    }

    async validateSameEmailBelongToSameUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await UserService.getUserByEmail(req.body.email);
        if (user && user.id === req.params.userId) {
            next();
        } else {
            res.status(400).send({
                message: 'Invalid email!',
            });
        }
    }

    validatePatchEmail = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.body.email) {
            await this.validateSameEmailBelongToSameUser(req, res, next);
        } else {
            next();
        }
    };

    async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await UserService.readById(req.params.userId);
        if (user) {
            next();
        } else {
            res.status(404).send({
                message: `User ${req.params.userId} not found`,
            });
        }
    }

    async extractUserId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.userId;
        next();
    }

    async validateSamePasswordBelongToSameUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) {
        let user = await UserService.readById(req.body.id);

        if (!user?.email) {
            return res.status(400).send({
                message: 'Invalid email!',
            });
        }

        user = await UserService.getUserByEmail(user?.email || '');

        if (await argon2.verify(user?.password || '', req.body.currentPassword)) {
            req.body.password = req.body.newPassword;
            return next();
        }

        res.status(400).send({
            message: "Your current password don't match!",
        });
    }

    async validateUserRole(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!req.body.role) {
            req.body.role = UserRole.USER;
        }
        next();
    }

    // FIXME: when it will be completed, then remove this piece of code
    async validateUserAvatar(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.image = 'avatar.jpg';
        next();
    }

    // FIXME: split the middleware
    validateUserSettings = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!req.body.id) {
            return res.status(400).send({
                message: "User id wasn't found",
            });
        }

        if (req.body.currentPassword && req.body.newPassword) {
            return await this.validateSamePasswordBelongToSameUser(req, res, next);
        }

        if (req.body.name) {
            return next();
        }

        res.status(400).send({
            message: 'Something went wrong!',
        });
    };
}

export default new UserMiddleware();
