import { Router } from "express";
import { getRequest, sendConnectionRequest } from "../controllers/request.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";
const requestRouter = Router();

requestRouter.get("/request", getRequest);
requestRouter.post("/sendConnectionRequest", userAuth, sendConnectionRequest);

export default requestRouter;
