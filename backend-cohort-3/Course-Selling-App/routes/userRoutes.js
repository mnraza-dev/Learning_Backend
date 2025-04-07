import Router from "express";
import { login, signup } from "../controllers/userController.js";


const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/purchases", (req, res) => {
  res.json({
    message: "Course purchased successfully!",
  });
});

export default userRouter;
