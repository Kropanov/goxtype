import express from 'express';
import usersService from "../service/users.service.js";

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await usersService.list(100, 0);
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await usersService.readById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        // req.body.password = await argon2.hash(req.body.password);
        const userId = await usersService.create(req.body);
        res.status(201).send({ id: userId });
    }

    async patch(req: express.Request, res: express.Response) {
        // if (req.body.password) {
        //     req.body.password = await argon2.hash(req.body.password);
        // }
        await usersService.patchById(req.body.id, req.body);
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        // req.body.password = await argon2.hash(req.body.password);
        await usersService.putById(req.body.id, req.body);
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        await usersService.deleteById(req.body.id);
        res.status(204).send();
    }
}

export default new UsersController();