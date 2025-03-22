import { Router } from "express";
import { loggedInUser, loggedOutUser, signupUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post("/signup", signupUser);
userRouter.post("/login", loggedInUser);
userRouter.post("/logout", loggedOutUser);
// userRouter.get("/", getAllUsers);
// userRouter.get("/:id", getUserById);

export default userRouter;
