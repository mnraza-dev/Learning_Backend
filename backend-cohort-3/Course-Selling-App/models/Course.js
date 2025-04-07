import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      validate(value) {
        const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
        if (!value.match(urlPattern)) {
          throw new Error("Invalid URL format for imageUrl");
        }
      },
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", userSchema);
export default Course;
