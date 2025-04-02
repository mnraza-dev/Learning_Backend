import { Router } from "express";
import {
  sendConnectionRequest,
  getProfile,
  deleteUser,
  getAllUsers,
  getUserByEmail,
  login,
  signup,
  updateUser,
} from "../controllers/user.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const userRoutes = Router();

userRoutes.get("/feed", getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.get("/profile", userAuth, getProfile);
userRoutes.get("/:email", getUserByEmail);
userRoutes.put("/:userName", updateUser);
userRoutes.delete("/:userName", deleteUser);
userRoutes.post("/sendConnectionRequest", userAuth, sendConnectionRequest);

export default userRoutes;
