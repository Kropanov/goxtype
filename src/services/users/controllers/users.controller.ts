import express from 'express';
import argon2 from 'argon2';
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
        const userId = await UsersService.create(req.body);
        res.status(201).send({ id: userId });
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