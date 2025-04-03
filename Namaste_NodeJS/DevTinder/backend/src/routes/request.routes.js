import { Router } from "express";
import { getRequest } from "../controllers/request.controller.js";
const requestRouter = Router();

requestRouter.get("/request", getRequest);
export default requestRouter;
