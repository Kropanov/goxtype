import express from "express";
import UsersService from "../service/users.service.js";

class UsersMiddleware {
    async validateSameEmailDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await UsersService.getUserByEmail(req.body.email);
        if (user) {
            res.status(400).send({
                status: "fail",
                message: "User email already exists!"
            });
        } else {
            next();
        }
    }

    async validateSameEmailBelongToSameUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await UsersService.getUserByEmail(req.body.email);
        if (user && user.id === req.params.userId) {
            next();
        } else {
            res.status(400).send({
                status: "fail",
                message: "Invalid email!"
            });
        }
    }

// Here we need to use an arrow function to bind `this` correctly
    validatePatchEmail = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if (req.body.email) {
            await this.validateSameEmailBelongToSameUser(req, res, next);
        } else {
            next();
        }
    };

    async validateUserExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await UsersService.readById(req.params.userId);
        if (user) {
            next();
        } else {
            res.status(404).send({
                status: "fail",
                message: `User ${req.params.userId} not found`,
            });
        }
    }

    async extractUserId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.userId;
        next();
    }
}

export default new UsersMiddleware();
