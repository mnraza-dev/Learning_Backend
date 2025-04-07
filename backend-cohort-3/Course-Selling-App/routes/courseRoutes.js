import Router from "express";
const courseRouter = Router();
courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "Course added successfully!",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "Course preview fetched successfully!",
  });
});

export default courseRouter;