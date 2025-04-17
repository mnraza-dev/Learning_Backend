import mongoose from "mongoose";

// type UserType = {
//     username: string,
//     email: string,
//     password: string
// }

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;