import { Router } from "express";

import { userAuth } from "../middlewares/auth.middleware.js";

const profileRouter = Router();

profileRouter.get("/feed", userAuth, (req, res) => {
  res.status(200).json({ message: "Feed" });
});

export default profileRouter;
