import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from '../constants.js';

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            console.error("MONGO DB CONNECTION ❌ Error: MONGODB_URI is not defined.");
            process.exit(1);
        }

        console.log(`Connecting to MongoDB at: ${process.env.MONGODB_URI}/${DB_NAME}`);

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('\n✅ MONGODB CONNECTED 🚀');
    } catch (error) {
        console.error(`MONGO DB CONNECTION ❌ Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
