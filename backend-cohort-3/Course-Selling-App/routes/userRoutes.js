import Router from "express";
import {
  login,
  logout,
  purchasedList,
  signup,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/purchases", purchasedList);

export default userRouter;
