import { CRUD } from '../../common/interfaces/crud.interface.js';
import PackDao from '../dao/packs.dao.js';
import { CreatePackDto } from '../dto/create.packs.dto.js';

class PackService implements CRUD {
    create(resource: CreatePackDto): Promise<any> {
        return PackDao.addPack(resource);
    }

    deleteById(id: string): Promise<string> {
        return PackDao.removePackById(id);
    }

    list(limit: number, page: number): Promise<any> {
        return PackDao.getPacks(limit, page);
    }

    patchById(id: string, resource: any): Promise<string> {
        return Promise.resolve('');
    }

    putById(id: string, resource: any): Promise<string> {
        return Promise.resolve('');
    }

    readById(id: string) {
        return PackDao.readPackById(id);
    }
}

export default new PackService();
