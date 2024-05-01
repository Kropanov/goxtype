import argon2 from 'argon2';
import express from 'express';

import JWTService, { JWTPayload } from '../../common/service/jwt.service.js';
import UserService from '../../users/service/users.service.js';

class AuthMiddleware {
    async verifyUserPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await UserService.getUserByEmail(req.body.email);

        if (user && user.password) {
            const passwordHash = user.password;
            if (await argon2.verify(passwordHash, req.body.password)) {
                req.body = {
                    userId: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
                return next();
            }
        }
        res.status(401).send({ message: 'Invalid email and/or password!' });
    }

    // FIXME: protectRoute seems better than is
    async protectRoutes(req: express.Request, res: express.Response, next: express.NextFunction) {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

        if (!token || !req.headers.authorization?.startsWith('Bearer')) {
            return res.status(401).send({ message: 'Please login to get access!' });
        }

        // FIXME: This should be at another middleware
        try {
            const { id } = JWTService.verifyJWT(token) as JWTPayload;
            const currentUser = await UserService.readById(id);

            if (!currentUser) {
                return res.status(401).send({ message: 'User was deleted!' });
            }
        } catch (error) {
            return res.status(401).send({ error: error, message: 'Please login again!' });
        }

        return next();
    }
}

export default new AuthMiddleware();
