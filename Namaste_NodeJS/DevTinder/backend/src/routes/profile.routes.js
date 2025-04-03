import { Router } from "express";
import { userAuth } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.get("/profile", userAuth, getProfile);

export default profileRouter;
