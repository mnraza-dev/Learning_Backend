import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db";
import app from "./server"
dotenv.config();
const port = process.env.PORT || 3000;
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${port}`);

})