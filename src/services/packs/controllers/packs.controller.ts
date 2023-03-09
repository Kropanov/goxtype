import express from "express";
import PacksService from "../service/packs.service.js";

class PacksController {
    async createPack(req: express.Request, res: express.Response) {
        const packId = await PacksService.create(req.body);
        res.status(201).send({ id: packId });
    }

    async listPacks(req: express.Request, res: express.Response) {
        const packs = await PacksService.list(100, 0);
        res.status(200).send(packs);
    }

    async removePack(req: express.Request, res: express.Response) {
        const message = await PacksService.deleteById(req.body.id);
        res.status(200).send(message);
    }

    async getPackById(req: express.Request, res: express.Response) {
        const pack = await PacksService.readById(req.body.id);
        res.status(200).send(pack);
    }
}

export default new PacksController();