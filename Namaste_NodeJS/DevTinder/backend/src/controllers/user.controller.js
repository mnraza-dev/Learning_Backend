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

export const feed = async (req, res) => {
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
