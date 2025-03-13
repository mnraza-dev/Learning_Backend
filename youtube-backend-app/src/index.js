import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
