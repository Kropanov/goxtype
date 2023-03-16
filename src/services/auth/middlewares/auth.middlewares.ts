import express from 'express';
import argon2 from "argon2";
import UserService from "../../users/service/users.service.js";

class AuthMiddleware {
    async verifyUserPassword(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await UserService.getUserByEmail(
            req.body.email
        );

        if (user && user.password) {
            const passwordHash = user.password;
            if (await argon2.verify(passwordHash, req.body.password)) {
                req.body = {
                    userId: user._id,
                    email: user.email,
                    permissionFlags: user.permissionLevel,
                };
                return next();
            }
        }
        res.status(401).send({
            status: "fail",
            message: "Invalid email and/or password!"
        });
    }

    async protectRoutes(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

        if (!token || !req.headers.authorization?.startsWith("Bearer")){
            return res.status(401).send({
                status: "fail",
                message: "Please login to get access!"
            });
        }
        // TODO: don't forget, continue work
        return next();
    }
}

export default new AuthMiddleware();