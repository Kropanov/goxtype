import express from 'express';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import UsersService from "../service/users.service.js";

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await UsersService.list(100, 0);
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await UsersService.readById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const user = await UsersService.create(req.body);
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET || "", {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        res.status(201).send({
            status: "success",
            token,
            data: {
                user
            }
        });
    }

    async patch(req: express.Request, res: express.Response) {
        if (req.body.password) {
            req.body.password = await argon2.hash(req.body.password);
        }
        await UsersService.patchById(req.body.id, req.body);
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        await UsersService.putById(req.body.id, req.body);
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        await UsersService.deleteById(req.body.id);
        res.status(204).send();
    }
}

export default new UsersController();