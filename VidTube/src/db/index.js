import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

const connectDB = async () => {
    try {
      const connectionInstace =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('\n MONGODB CONNECTED 🚀');
        
    } catch (error) {
        console.log(`MONGO DB CONNECTION ❌ Error: ${error}`);
        process.exit(1);    
    }

}

export  default connectDB;