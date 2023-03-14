import MongooseService from "../../common/service/mongoose.service.js";

const Schema = MongooseService.getMongoose().Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    permissionLevel: Number,
});

const User = MongooseService.getMongoose().model("Users", userSchema);

export default User;