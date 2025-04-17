import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Tags = mongoose.model("Tags", tagsSchema);

export default Tags;