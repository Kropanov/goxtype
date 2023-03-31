import express from 'express';
import { validationResult } from 'express-validator';

class BodyValidationMiddleware {
    verifyBodyFieldsErrors(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.array().find(() => true);
            return res.status(400).send({message: error?.msg});
        }
        next();
    }
}

export default new BodyValidationMiddleware();