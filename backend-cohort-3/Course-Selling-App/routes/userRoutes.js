import Router from "express";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "User Signed Up successfully!",
  });
});
userRouter.post("/login", (req, res) => {
  res.json({
    message: "User Logged In successfully!",
  });
});

userRouter.post("/purchases", (req, res) => {
  res.json({
    message: "Course purchased successfully!",
  });
});

export default userRouter;
