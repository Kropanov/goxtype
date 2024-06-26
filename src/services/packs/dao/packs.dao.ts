import { CreatePackDto } from '../dto/create.packs.dto.js';
import Pack from '../models/packs.models.js';

class PackDao {
    async addPack(data: CreatePackDto) {
        const pack = new Pack(data);
        await pack.save();
        return pack._id;
    }

    async getPacks(limit = 25, page = 0) {
        return Pack.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    async removePackById(packId: string) {
        await Pack.deleteOne({ _id: packId }).exec();
        return 'Pack was removed!';
    }

    async readPackById(packId: string) {
        return Pack.findOne({ _id: packId }).exec();
    }
}

export default new PackDao();
