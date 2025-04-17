import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("Connected to MongoDB 🚀 ");
    } catch (error) {
        console.log(error);
        return process.exit(1);
    }
}
export default connectDB