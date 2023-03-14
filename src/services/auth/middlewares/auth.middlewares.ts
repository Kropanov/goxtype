import express from 'express';
import argon2 from "argon2";
import UsersService from "../../users/service/users.service.js";

class AuthMiddlewares {
    async verifyUserPassword(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await UsersService.getUserByEmail(
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
}

export default new AuthMiddlewares();