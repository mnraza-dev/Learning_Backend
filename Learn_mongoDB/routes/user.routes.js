import { Router } from "express";
import {
  createUser,
  deleteUser,
  fetchUser,
  fetchUserByUser,
  updateUser,
} from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get("/", fetchUser);
userRouter.get("/:userName", fetchUserByUser);
userRouter.post("/create", createUser);
userRouter.put("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;
