import dotenv from "dotenv";
import express from 'express';
import cors from "cors";


dotenv.config({});
const app = express();


// common middlewares
app.use(express.json({
    limit: "16kb",
}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb",
}));
app.use(express.static("public"));
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        Credentials: true,
        })
)

export { app };