import { Router } from "express";
import { User } from "../models/user.models.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "Users fetched successfully",
    data: users,
  });
});
userRouter.get("/:userName", async (req, res) => {
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
});
userRouter.post("/create", (req, res) => {
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
});
userRouter.put("/update/:userName", async (req, res) => {
  try {
    const { userName } = req.params;
    const { name, email } = req.body;
    const user = await User.findOneAndUpdate(
      { userName },
      {
        name,
        email,
      },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
});

export default userRouter;
