import mongoose from "mongoose";
import { User } from "../models/user.models.js";
import cloudinary from "../config/cloudinary.config.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    // if (!req.files || !req.files.logoUrl) {
    //   return res.status(400).json({ message: "Logo image is required" });
    // }

    // const logoFile = req.files.logoUrl; // Use correct field name

    // if (!logoFile.tempFilePath) {
    //   return res.status(400).json({ message: "Invalid file structure" });
    // }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const uploadImage = await cloudinary.uploader.upload(req.files.logoUrl.tempFilePath);

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      channelName: req.body.channelName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      logoUrl: uploadImage.secure_url,
      logoId: uploadImage.public_id,
    });

    let user = await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

