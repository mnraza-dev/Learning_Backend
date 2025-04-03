import { Router } from "express";
import {
  signup,
  login,
  logout,
} from "../controllers/user.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login",userAuth, login);
authRouter.post("/logout", logout);

export default authRouter;
