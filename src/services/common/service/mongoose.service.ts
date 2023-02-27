import dotenv from 'dotenv';
dotenv.config({ path: "./config.env" });
import mongoose from 'mongoose';

const DATABASE = process.env.DATABASE || "";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";

const DB = DATABASE.replace(
    "<password>",
    DATABASE_PASSWORD
);

class MongooseService {
    private count = 0;
    private mongooseOptions = {
        serverSelectionTimeoutMS: 5000,
    };

    constructor() {
        this.connectWithRetry();
    }

    getMongoose() {
        return mongoose;
    }

    // ToDo: rework this method
    connectWithRetry = () => {
        mongoose.set('strictQuery', true);
        mongoose
            .connect(DB, this.mongooseOptions)
            .then(() => {
                console.log('MongoDB is connected!');
            })
            .catch((err) => {
                const retrySeconds = 5;
                console.log(
                    `MongoDB connection unsuccessful (will retry #${++this
                        .count} after ${retrySeconds} seconds):`,
                    err
                );
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
    };
}

export default new MongooseService();