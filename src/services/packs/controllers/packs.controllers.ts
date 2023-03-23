import express from "express";
import PackService from "../service/packs.service.js";

class PackController {
    async createPack(req: express.Request, res: express.Response) {
        const packId = await PackService.create(req.body);
        res.status(201).send({
            id: packId
        });
    }

    async listPacks(req: express.Request, res: express.Response) {
        const packs = await PackService.list(100, 0);
        res.status(200).send({data: packs});
    }

    async removePack(req: express.Request, res: express.Response) {
        const message = await PackService.deleteById(req.body.id);
        res.status(200).send({message});
    }

    async getPackById(req: express.Request, res: express.Response) {
        const pack = await PackService.readById(req.body.id);
        res.status(200).send({data: pack});
    }
}

export default new PackController();