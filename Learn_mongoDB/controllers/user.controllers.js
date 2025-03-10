import { User } from "../models/user.models.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, userName } = req.body;
    if (!name || !email || !userName)
      return res.status(400).json({ message: "All fields are required" });
    const user = new User({ name, email, userName });

    if (!user) return res.status(400).json({ message: "User not created" });
    user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
    console.log(error);
  }
}
export const fetchUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "Users fetched successfully",
    data: users,
  });
}
export const fetchUserByUser = async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.params.userName,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
      message: "Users fetched successfully",
      errors: null,
      data: user,
    });
  } catch (error) {
    return res.status(200).json({
      message: "Error in fetching users data",
      errors: error.message,
      data: null,
    });
  }
}
export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await User.findOneAndUpdate(
        { id },
        {
          name,
          email,
        },
        { new: true }
      );
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User updated successfully", data: user });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating user", error: error.message });
    }
}
export const deleteUser = async (req, res) => {
    try {
      const user = await User.findOneAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User deleted successfully", data: null });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting user", error: error.message });
    }
  }