import User from "../model/User.js";
import z from "zod";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// z.name = z.string().min(3);
// z.email = z.string().email();
// z.password = z.string().min(6);

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password });
    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }
    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;
    await user.save();
    // send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASS,
      },
    });
    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email ✔",
      text: ` Please click on the following URL to verify your email: ${process.env.BASE_URL}/api/v1/user/verify/${token}`,
    };
    await transporter.sendMail(mailOptions);
    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, success: false, message: "User Not registered" });
  }
};

export const verifyUser = async (req, res) => {
  const { token } = req.params;
  if (!token) {
    return res.status(400).json({ message: "Token not found" });
  }
  try {
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).json({ message: "User verified successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, success: false, message: "User Not verified" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );

    if (!token) {
      return (
        res.status(400),
        json({
          message: "Token invalid",
          success: false,
        })
      );
    }
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error,
      success: false,
    });
  }
};
