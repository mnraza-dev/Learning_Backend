import { Router } from "express";
import {
  signup,
  login,
  logout,
  test,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.get("/test", test);
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
