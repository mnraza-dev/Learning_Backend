import { User } from "../models/user.models.js";

export const getAllUsers = (req, res) => {
  res.send("Get all users");
};
export const getUserById = (req, res) => {
  res.send("Get user");
};
export const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
  res.send("Create user");
};
export const updateUser = (req, res) => {
  res.send("Update user");
};
export const deleteUser = (req, res) => {
  res.send("Delete user");
};
