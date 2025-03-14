import { Router } from "express";
import { createUser, getAllUsers, getUserById, loggedInUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", loggedInUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

export default userRouter;
