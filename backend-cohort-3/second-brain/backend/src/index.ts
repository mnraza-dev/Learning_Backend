import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.post("/api/v1/signup", (req, res) => {
    console.log(req.body);
    res.send("Signup!");
})
app.post("/api/v1/signin", (req, res) => {
    console.log(req.body);
    res.send("siggnin!");
})
app.post("/api/v1/content", (req, res) => {
    console.log(req.body);
    res.send("content!");
})
app.post("/api/v1/brain/share", (req, res) => {
    console.log(req.body);
    res.send("Signup!");
})
app.get("/api/v1/brain/:shareLink", (req, res) => {
    console.log(req.body);
    res.send("Signup!");
})







app.listen(port, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${port}`);

})