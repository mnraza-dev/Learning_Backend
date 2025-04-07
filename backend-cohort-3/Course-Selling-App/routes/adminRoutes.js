import Router from "express";

const adminRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "Admin Signed Up successfully!",
  });
});
userRouter.post("/login", (req, res) => {
  res.json({
    message: "Admin Logged In successfully!",
  });
});
adminRouter.post("/course", (req, res) => {
  res.json({
    message: "Course added successfully!",
  });
});
adminRouter.put("/course", (req, res) => {
  res.json({
    message: "Course updated successfully!",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Course get in bulk!",
  });
});

export default adminRouter;