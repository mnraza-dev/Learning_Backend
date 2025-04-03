import { Router } from "express";
import {
  sendConnectionRequest,
  getProfile,
  deleteUser,
  getAllUsers,
  getUserByEmail,
  updateUser,
} from "../controllers/user.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/feed", getAllUsers);
userRouter.get("/:email", getUserByEmail);
userRouter.put("/:userName", updateUser);
userRouter.delete("/:userName", deleteUser);
userRouter.post("/sendConnectionRequest", userAuth, sendConnectionRequest);

export default userRouter;
