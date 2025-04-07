import Router from "express";
import {
  signup,
  login,
  addCourse,
  updateCourse,
  getAllCourses,
} from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.post("/signup", signup);
adminRouter.post("/login", login);
adminRouter.post("/course", addCourse);
adminRouter.put("/course", updateCourse);
adminRouter.get("/course/bulk", getAllCourses);

export default adminRouter;
