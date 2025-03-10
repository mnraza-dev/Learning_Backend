import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
const hostname = "127.0.0.1";
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);	

connectDB();

app.listen(PORT, hostname, () => {
  console.log(`Server is running on  http://${hostname}:${PORT}`);
});
