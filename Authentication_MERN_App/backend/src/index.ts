import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors(
    {
        origin: process.env.ORIGIN,
        credentials: true,
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    connectDB();
    console.log(`⚡️[server]: Server is running at http://localhost:${port} on ${process.env.NODE_ENV} mode`);
})