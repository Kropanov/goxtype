import express from 'express';

import { CommonRoutesConfig } from './routes.config.js';

export class NonExistentRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'NonExistentRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('*').all(async (req, res) => {
            res.status(404).send({
                message: "Route wasn't found!",
            });
        });

        return this.app;
    }
}
