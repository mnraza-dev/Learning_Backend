import { Router } from "express";
import {
  feed,
  getUserByEmail,
  login,
  signup,
} from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/feed", feed);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.get("/:email", getUserByEmail);

export default userRoutes;
