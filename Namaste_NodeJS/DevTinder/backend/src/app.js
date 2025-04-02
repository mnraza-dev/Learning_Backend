import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import userRoutes from "./routes/user.routes.js";



dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api/users", userRoutes);
















app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});
