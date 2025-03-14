import { Router } from "express";
import { createUser, getAllUsers, getUserById } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

export default userRouter;
