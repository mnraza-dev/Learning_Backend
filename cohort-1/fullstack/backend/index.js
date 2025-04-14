import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import routes
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  connectDB();

  console.log(`Server is running on port http://localhost:${port}`);
});
