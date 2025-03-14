import { Router } from "express";
const videoRouter = Router();

videoRouter.post("/signup", createUser);

export default videoRouter;
