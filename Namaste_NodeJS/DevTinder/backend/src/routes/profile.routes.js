import { Router } from "express";
import { userAuth } from "../middlewares/auth.middleware.js";
import { getProfile, editProfile } from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.get("/profile/view", userAuth, getProfile);
profileRouter.patch("/profile/edit", userAuth, editProfile);

export default profileRouter;
