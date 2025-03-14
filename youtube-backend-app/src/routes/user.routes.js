import { Router } from "express";
import {

  createUser,
 
} from "../controllers/user.controllers.js";

const userRouter = Router();



userRouter.post("/signup", createUser);

export default userRouter;
