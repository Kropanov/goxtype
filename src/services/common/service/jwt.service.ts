import {Types} from "mongoose";
import jwt from "jsonwebtoken";

class JWTService {
    createJWT(id: Types.ObjectId) {
        return jwt.sign({id}, process.env.JWT_SECRET || "", {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
    }
}

export default new JWTService();