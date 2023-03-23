import express from 'express';
import argon2 from "argon2";
import UserService from "../../users/service/users.service.js";
import JWTService from "../../common/service/jwt.service.js";

class AuthController {
    async login(req: express.Request, res: express.Response) {
        const token = JWTService.createJWT(req.body.userId);
        res.status(201).send({token});
    }

    async signup(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const user = await UserService.create(req.body);
        const token = JWTService.createJWT(user._id);
        res.status(201).send({token});
    }
}

export default new AuthController();