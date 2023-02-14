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
        return "User changed!";
    }

    async patchUserById(userId: string, user: PatchUserDto) {
        return "User was patched";
    }

    async removeUserById(userId: string) {
        return "User removed!";
    }

    async getUserByEmail(email: string) {
        return;
    }
}

export default new UsersDao();