import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (!user) {
      return res.status(400).json({ message: "User not created" });
    }

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    console.log("req.body: ", req.body);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const test = async (req, res) => {
  res.json({ message: "Hello World" });
};
