import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserByEmail,
  login,
  signup,
  updateUser,
} from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/feed", getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.get("/:email", getUserByEmail);
userRoutes.put("/:userName", updateUser);
userRoutes.delete("/:userName", deleteUser);

export default userRoutes;