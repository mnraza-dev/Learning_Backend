import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    hash: {
        type: String,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    }
}, { timestamps: true });

const Link = mongoose.model("Link", linkSchema);

export default Link;