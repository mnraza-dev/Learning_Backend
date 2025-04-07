import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      res.json({
        message: "All fields are required!",
      });
    }
    const existingUser = User.find({ email: email });
    if (!existingUser) {
      res.json({
        message: "User already exists!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    await user.save();

    if (!user) {
      return res.status(500).json({
        message: "User registration failed!",
      });
    }
    res.json({
      message: "Sign Up successful ",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User not found!",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials!",
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  if (!token) {
    return res.status(500).json({
      message: "Token generation failed!",
    });
  }
  res.cookie("myToken", token, {
    httpOnly: true,
    maxAge: 3600000 * 4, // 4 hours
  });

  res.json({
    message: "User Logged In successfully!",
    data: user,
  });
};
