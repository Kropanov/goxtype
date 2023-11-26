import { CRUD } from '../../common/interfaces/crud.interface.js';
import UserDao from '../dao/users.dao.js';
import { CreateUserDto } from '../dto/create.user.dto.js';
import { PatchUserDto } from '../dto/patch.user.dto.js';
import { PutUserDto } from '../dto/put.user.dto.js';

// TODO: fix any types
class UserService implements CRUD {
    async create(resource: CreateUserDto) {
        return UserDao.addUser(resource);
    }

    // eslint-disable-next-line
    async deleteById(id: string): Promise<any> {
        return UserDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UserDao.getUsers(limit, page);
    }

    // eslint-disable-next-line
    async patchById(id: string, resource: PatchUserDto): Promise<any> {
        return UserDao.updateUserById(id, resource);
    }

    // eslint-disable-next-line
    async putById(id: string, resource: PutUserDto): Promise<any> {
        return UserDao.updateUserById(id, resource);
    }

    async readById(id: string) {
        return UserDao.getUserById(id);
    }

    async getUserByEmail(email: string) {
        return UserDao.getUserByEmail(email);
    }
}

export default new UserService();
