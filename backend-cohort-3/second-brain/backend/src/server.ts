import express, { Request, Response } from "express";
import User from "./models/User";
import jwt from "jsonwebtoken";
import Content from "./models/Content";
import { auth } from "./middlewares/auth";
import Tags from "./models/Tags";
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
});

app.post("/api/v1/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email, password });
        if (existingUser) {
            const token = jwt.sign(
                { id: existingUser._id },
                process.env.JWT_SECRET!,
                { expiresIn: "1d" }
            );

            res.status(200).json({
                message: "Signin successful",
                token,
                success: true
            });
        } else {
            res.status(404).json({
                message: "Incorrect credentials",
                success: false
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            success: false
        });
    }
});

app.post("/api/v1/content", auth, (req, res) => {
    const { link, type, title, tags, content } = req.body;
    try {
        Content.create({
            link, type, title, tags, content,
            userId: req.userId
        });
        res.status(201).json({
            message: "Content created successfully",
            success: true,
            data: { link, type, title, tags, content }
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            success: false
        })
    }
});

app.get("/api/v1/content", auth, async (req, res) => {
    const contents = await Content.find({
        userId: req.userId
    }).populate("userId", "username");
    if (!contents) throw new Error("Content not found");
    res.status(200).json({
        message: "Content fetched successfully",
        success: true,
        data: contents
    })
});

app.post("/api/v1/brain/share", (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Signup!");
});

app.get("/api/v1/brain/:shareLink", (req: Request, res: Response) => {
    console.log(req.body);
    res.send("shared link page!");
});

app.post("/api/v1/tags", auth, async (req: Request, res: Response) => {
    const { title } = req.body;
    try {
        const tags = await Tags.create({
            title
        });

        if (!tags) throw new Error("Tags not found");

        res.status(200).json({
            message: "Tags added successfully",
            success: true,
            data: { title }
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            success: false
        })
    }
});

app.get("/api/v1/tags", auth, async (req: Request, res: Response) => {
    const tags = await Tags.find({});
    if (!tags) throw new Error("Tags not found");
    res.status(200).json({
        message: "Tags fetched successfully",
        success: true,
        data: { tags }
    });

});
export default app;
