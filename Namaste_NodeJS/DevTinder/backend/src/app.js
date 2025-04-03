import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.config.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import profileRouter from "./routes/profile.routes.js";
import { requestRouter } from "./routes/request.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 3000;



app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRouter);
app.use("/api/request", requestRouter);



app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});