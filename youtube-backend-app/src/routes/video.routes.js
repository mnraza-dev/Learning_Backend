import { Router } from "express";
import { updateVideo, uploadVideo } from "../controllers/video.controllers";
import { checkAuth } from "../middleware/auth.middleware";
const videoRouter = Router();

videoRouter.post("/upload", checkAuth, uploadVideo);
videoRouter.put("/upload/:id", checkAuth, updateVideo);

export default videoRouter;
