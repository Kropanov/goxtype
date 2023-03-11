import {CreateUserDto} from "../dto/create.user.dto";
import {PutUserDto} from "../dto/put.user.dto";
import {PatchUserDto} from "../dto/patch.user.dto";
import User from "../models/users.models.js";

class UsersDao {
    async addUser(userFields: CreateUserDto) {
        const user = new User({
            ...userFields,
            permissionFlags: 1,
        });
        await user.save();
        return user._id;
    }

    async getUsers(limit = 25, page = 0) {
        return User.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    async getUserById(userId: string) {
        return User.findOne({ _id: userId }).exec();
    }

    async updateUserById(
        userId: string,
        userFields: PatchUserDto | PutUserDto
    ) {
        const existingUser = await User.findOneAndUpdate(
            { _id: userId },
            { $set: userFields },
            { new: true }
        ).exec();

        return existingUser;
    }

    async removeUserById(userId: string) {
        return User.deleteOne({ _id: userId }).exec();
    }

    async getUserByEmail(email: string) {
        return User.findOne({ email: email }).exec();
    }
}

export default new UsersDao();