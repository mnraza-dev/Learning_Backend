import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/v1",userRouter);
app.listen(port, () => {

    console.log(`Server started at http://localhost:${port}`);
});