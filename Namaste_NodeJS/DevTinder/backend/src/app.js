import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import { signup } from "./controllers/user.controller.js";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/api/users", signup);




app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});
