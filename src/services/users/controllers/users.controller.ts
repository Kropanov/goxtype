import argon2 from 'argon2';
import express from 'express';

import UserService from '../service/users.service.js';

class UserController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await UserService.list(100, 0);
        res.status(200).send({ data: users });
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await UserService.readById(req.body.id);
        res.status(200).send({ data: user });
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const user = await UserService.create(req.body);
        res.status(201).send({ data: user });
    }

    async patch(req: express.Request, res: express.Response) {
        if (req.body.password) {
            req.body.password = await argon2.hash(req.body.password);
        }
        await UserService.patchById(req.body.id, req.body);
        res.status(200).send({ message: 'User was updated!' });
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        await UserService.putById(req.body.id, req.body);
        res.status(200).send({ message: 'User was updated!' });
    }

    async removeUser(req: express.Request, res: express.Response) {
        await UserService.deleteById(req.body.id);
        res.status(200).send({ message: 'User was deleted!' });
    }
}

export default new UserController();
