import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comments",
    //   },
    // ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Videos = mongoose.model("Videos", videoSchema);
