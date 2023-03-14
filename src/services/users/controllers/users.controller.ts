import express from 'express';
import argon2 from 'argon2';
import UsersService from "../service/users.service.js";

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await UsersService.list(100, 0);
        res.status(200).send({
            status: "success",
            data: users
        });
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await UsersService.readById(req.body.id);
        res.status(200).send({
            status: "success",
            data: user
        });
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const user = await UsersService.create(req.body);
        res.status(201).send({status: "success", data: user});
    }

    async patch(req: express.Request, res: express.Response) {
        if (req.body.password) {
            req.body.password = await argon2.hash(req.body.password);
        }
        await UsersService.patchById(req.body.id, req.body);
        res.status(200).send({
            status: "success",
            message: "User was updated!"
        });
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        await UsersService.putById(req.body.id, req.body);
        res.status(200).send({
            status: "success",
            message: "User was updated!"
        });
    }

    async removeUser(req: express.Request, res: express.Response) {
        await UsersService.deleteById(req.body.id);
        res.status(200).send({
            status: "success",
            message: "User was deleted!"
        });
    }
}

export default new UsersController();