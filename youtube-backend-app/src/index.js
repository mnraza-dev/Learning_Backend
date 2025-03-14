import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import userRouter from "./routes/user.routes.js";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import videoRouter from "./routes/video.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(bodyParser.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/video", videoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
