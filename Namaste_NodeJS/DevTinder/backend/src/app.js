import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import User from "./models/user.model.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});
