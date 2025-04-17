"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contentSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Tags",
    },
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });
const Content = mongoose_1.default.model("Content", contentSchema);
exports.default = Content;
