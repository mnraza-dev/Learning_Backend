import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["text", "image", "article", "video"],
        default: "text"
    },

    title: {
        type: String,
        required: true,
    },
    tags: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Tags",
        type: [String],

    },
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

}, { timestamps: true });
const Content = mongoose.model("Content", contentSchema);
export default Content