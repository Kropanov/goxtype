import {Types} from "mongoose";
import jwt from "jsonwebtoken";

export interface JWTPayload {
    id: string
}

class JWTService {
    createJWT(id: Types.ObjectId) {
        return jwt.sign({id}, process.env.JWT_SECRET || "", {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
    }

    verifyJWT(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET || "");
    }
}

export default new JWTService();