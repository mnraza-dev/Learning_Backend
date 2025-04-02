import { Router } from "express";
import {
  deleteUser,
  getUserByEmail,
  login,
  signup,
  updateUser,
} from "../controllers/user.controller.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/:email", getUserByEmail);
authRoutes.put("/:userName", updateUser);
authRoutes.delete("/:userName", deleteUser);

export default authRoutes;