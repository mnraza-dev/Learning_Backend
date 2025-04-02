import { Router } from "express";
import { login, signup, test } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/", test);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

export default userRoutes;