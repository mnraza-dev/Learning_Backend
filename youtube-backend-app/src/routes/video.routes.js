import { Router } from "express";
import { uploadVideo } from "../controllers/video.controllers";
import { checkAuth } from "../middleware/auth.middleware";
const videoRouter = Router();

videoRouter.post("/upload", checkAuth, uploadVideo);

export default videoRouter;
