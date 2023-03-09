import express from "express";
import {CommonRoutesConfig} from "../../common/routes/routes.config.js";
import PacksController from "../controllers/packs.controller.js";

export class PackRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PackRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route("/practice-packs/:userId")
            .delete(PacksController.removePack);

        this.app.route("/practice-packs")
            .post(PacksController.createPack)
            .get(PacksController.listPacks);
        return this.app;
    }
}