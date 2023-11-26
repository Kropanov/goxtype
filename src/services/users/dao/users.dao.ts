import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import User from '../models/users.models.js';

class UserDao {
    async addUser(userFields: CreateUserDto) {
        const user = new User({
            ...userFields,
        });
        await user.save();
        return user;
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

    async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
        return await User.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true }).exec();
    }

    async removeUserById(userId: string) {
        return User.deleteOne({ _id: userId }).exec();
    }

    async getUserByEmail(email: string) {
        return User.findOne({ email: email }).select('+password').exec();
    }
}

export default new UserDao();
