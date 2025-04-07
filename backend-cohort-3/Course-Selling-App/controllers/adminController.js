import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      res.json({
        message: "All fields are required!",
      });
    }
    const existingUser = User.find({ email });
    if (existingUser) {
      return res.status(400).json({
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

export const login = (req, res) => {
  res.json({
    message: "Login here",
  });
};
export const addCourse = (req, res) => {
  res.json({
    message: "Course added successfully!",
  });
};

export const updateCourse = (req, res) => {
  res.json({
    message: "Course updated successfully!",
  });
};

export const getAllCourses = (req, res) => {
  res.json({
    message: "Course get in bulk!",
  });
};
