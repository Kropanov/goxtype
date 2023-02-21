import {CRUD} from "../../common/interfaces/crud.interface.js";
import UsersDao from "../daos/users.dao.js";
import {CreateUserDto} from "../dto/create.user.dto.js";
import {PatchUserDto} from "../dto/patch.user.dto.js";
import {PutUserDto} from "../dto/put.user.dto.js";

class UsersService implements CRUD {
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string): Promise<any> {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers(limit, page);
    }

    async patchById(id: string, resource: PatchUserDto): Promise<any> {
        return UsersDao.updateUserById(id, resource);
    }

    async putById(id: string, resource: PutUserDto): Promise<any> {
        return UsersDao.updateUserById(id, resource);
    }

    async readById(id: string) {
        return UsersDao.getUserById(id);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();