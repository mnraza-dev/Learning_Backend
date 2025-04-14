import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyUser,
} from "../controller/UserController.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", loginUser);

export default userRouter;
