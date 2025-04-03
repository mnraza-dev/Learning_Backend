import { Router } from "express";

const requestRouter = Router();

requestRouter.get("/request", (req, res) => {
  res.status(200).json({ message: "Request sent" });
});
export default requestRouter;
