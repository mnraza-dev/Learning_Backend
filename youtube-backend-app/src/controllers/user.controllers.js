import mongoose from "mongoose";
import { User } from "../models/user.models.js";
import cloudinary from "../config/cloudinary.config.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ message: "Channel already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const uploadImage = await cloudinary.uploader.upload(
      req.files.logoUrl.tempFilePath
    );

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

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getUserById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

