import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  videoId: {    
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Videos',   
    required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    isLiked: {
        type: Boolean,
        default: false,
    },
    isDisliked: {
        type: Boolean,
        default: false,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    dislikeCount: {
        type: Number,
        default: 0,
    },


}, { timestamps: true });

export const Likes = mongoose.model('Likes', likeSchema);