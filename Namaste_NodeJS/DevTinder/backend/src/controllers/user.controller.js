import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await new User({
      ...req.body,
      password: hashedPassword,
    });
    if (!user) {
      return res.status(400).json({ message: "User not signed up" });
    }
    await user.save();
    res.status(201).json({
      message: "User signed up successfully",
      user,
    });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );
    console.log("token: ", token);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
      httpOnly: true,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) {
    return res.status(404).json({ message: "Users not found" });
  }
  res.json(users);
};
export const getUserByEmail = async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};
export const deleteUser = async (req, res) => {
  const userName = req.params.userName;
  try {
    const user = await User.findOneAndDelete({
      userName: userName,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const userName = req.params.userName;
    const user = await User.findOneAndUpdate(
      { userName: userName },
      { ...req.body },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProfile = async (req, res) => {
  try {
    const user = req.user;
    res.send("Logged in User details : " + user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const sendConnectionRequest = async (req, res) => {
  try {
    const user = req.user;
    const fullname = user.firstName + " " + user.lastName;

    res.json({ message: "Connection request sent by " + fullname });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
