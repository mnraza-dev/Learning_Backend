import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log("DB connected 🚀");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to DB ❌ ");
  }
};

export default connectDB;
