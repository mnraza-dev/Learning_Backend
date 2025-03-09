import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
         console.log('\n ✅ MONGODB CONNECTED 🚀');
    } catch (error) {
        console.error(`MONGODB CONNECTION ❌ Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
