import express from "express";
import dotenv from "dotenv";
import { User } from "./models/user.models.js";
import connectDB from "./db/index.js";
dotenv.config();

const app = express();
const hostname = "127.0.0.1";
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.post("/create", (req, res) => {
  try {
    const { name, email, userName } = req.body;
    const user = new User({ name, email, userName });
    user.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
    console.log(error);
  }
});

app.listen(PORT, hostname, () => {
  console.log(`Server is running on  http://${hostname}:${PORT}`);
});
