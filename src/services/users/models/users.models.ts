import MongooseService from '../../common/service/mongoose.service.js';

const Schema = MongooseService.getMongoose().Schema;

const userSchema = new Schema({
    email: String,
    password: { type: String, select: false },
    name: String,
    image: String,
    role: String,
});

const User = MongooseService.getMongoose().model('Users', userSchema);

export default User;
