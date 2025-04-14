import User from "../model/User.js";
import z from "zod";
import crypto from "crypto";

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
    
  } catch (error) {
    return res.status(500).json({ message: "Internal Error" });
  }

  res.json({ message: "User created" });
};
