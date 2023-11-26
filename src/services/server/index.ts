import bodyParser from 'body-parser';
import express, { Express } from 'express';

import { AuthRoutes } from '../auth/routes/auth.routes.js';
import { CommonRoutesConfig } from '../common/routes/routes.config.js';
import { NonExistentRoutes } from '../common/routes/routes.js';
import { PackRoutes } from '../packs/routes/packs.routes.js';
import { UserRoutes } from '../users/routes/users.routes.js';

const app: Express = express();
const routes: Array<CommonRoutesConfig> = [];
app.use(bodyParser.json());
app.use(express.static('public'));

routes.push(new UserRoutes(app));
routes.push(new PackRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new NonExistentRoutes(app));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
});
