import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Course Selling App!" });
});

app.post("/user/signup", (req, res) => {
  res.json({
    message: "User Signed Up successfully!",
  });
});
app.post("/user/login", (req, res) => {
  res.json({
    message: "User Logged In successfully!",
  });
});
app.post("/user/purchases", (req, res) => {
  res.json({
    message: "Course added successfully!",
  });
});
app.post("/course/purchase", (req, res) => {
  res.json({
    message: "Course added successfully!",
  });
});
app.get("/courses", (req, res) => {
  res.json({
    message: "All courses fetched successfully!",
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
