import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db";
import User from "./models/User";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/v1/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        res.status(201).json({
            message: "User created successfully",
            data: user,
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            success: false
        });
    }
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