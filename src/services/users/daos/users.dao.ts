import {CreateUserDto} from "../dto/create.user.dto";
import {PutUserDto} from "../dto/put.user.dto";
import {PatchUserDto} from "../dto/patch.user.dto";

class UsersDao {

    async addUser(user: CreateUserDto) {
        return;
    }

    async getUsers() {
        return;
    }

    async getUserById(userId: string) {
        return;
    }

    async putUserById(userId: string, user: PutUserDto) {
        return;
    }

    async patchUserById(userId: string, user: PatchUserDto) {
        return;
    }

    async removeUserById(userId: string) {
        return;
    }

    async getUserByEmail(email: string) {
        return;
    }
}

export default new UsersDao();