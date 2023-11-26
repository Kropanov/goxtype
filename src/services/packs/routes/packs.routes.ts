import express from 'express';

import { CommonRoutesConfig } from '../../common/routes/routes.config.js';
import PackController from '../controllers/packs.controllers.js';

export class PackRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PackRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/practice-packs/:userId').delete(PackController.removePack).get(PackController.getPackById);

        this.app.route('/practice-packs').post(PackController.createPack).get(PackController.listPacks);
        return this.app;
    }
}
