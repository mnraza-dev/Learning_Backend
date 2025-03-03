import mongoose from "mongoose";


const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Videos",
    },
  },
  {
    timestamps: true,
  }
);

export const Comments = mongoose.model("Comments", commentSchema);