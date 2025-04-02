import { Router } from "express";
import {
  feed,
  getUserByEmail,
  login,
  signup,
  test,
} from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/", test);
userRoutes.get("/:email", getUserByEmail);
userRoutes.get("/feed", feed);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

export default userRoutes;
