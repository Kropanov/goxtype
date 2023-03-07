import {CRUD} from "../../common/interfaces/crud.interface.js";
import PacksDao from "../dao/packs.dao.js";
import {CreatePacksDto} from "../dto/create.packs.dto.js";

class PacksService implements CRUD {
    create(resource: CreatePacksDto): Promise<any> {
        return PacksDao.addPack(resource);
    }

    deleteById(id: string): Promise<string> {
        return Promise.resolve("");
    }

    list(limit: number, page: number): Promise<any> {
        return Promise.resolve(undefined);
    }

    patchById(id: string, resource: any): Promise<string> {
        return Promise.resolve("");
    }

    putById(id: string, resource: any): Promise<string> {
        return Promise.resolve("");
    }

    readById(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

}

export default new PacksService();