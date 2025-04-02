import { Router } from "express";
import {
  getAllUsers,
  getUserByEmail,
  login,
  signup,
} from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/feed", getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.get("/:email", getUserByEmail);

export default userRoutes;