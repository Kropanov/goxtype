import MongooseService from "../../common/service/mongoose.service.js";

const Schema = MongooseService.getMongoose().Schema;

const packSchema = new Schema({
    name: String,
    author: String,
    data: [{
        text: String,
    }]
});

const Pack = MongooseService.getMongoose().model("Packs", packSchema);

export default Pack;