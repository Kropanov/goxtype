import express from "express";
import PacksService from "../service/packs.service.js";

class PacksController {
    async createPack(req: express.Request, res: express.Response) {
        const packId = await PacksService.create(req.body);
        res.status(201).send({ id: packId });
    }
}

export default new PacksController();