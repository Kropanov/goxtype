import {CreatePacksDto} from "../dto/create.packs.dto.js";
import Pack from "../models/packs.models.js";

class PacksDao {
    async addPack(data: CreatePacksDto) {
        const pack = new Pack(data);
        pack.save();
        return pack._id;
    }
}

export default new PacksDao();