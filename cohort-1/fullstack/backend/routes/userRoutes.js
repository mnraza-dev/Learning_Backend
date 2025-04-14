import { Router } from "express";
import { registerUser } from "../controller/UserController.js";

const userRouter = Router();

userRouter.post("/register", registerUser);

export default userRouter;
