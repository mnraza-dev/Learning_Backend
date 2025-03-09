import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(express.json());

dotenv.config();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    name: "MN Raza",
    age: 22,
  });
});
app.post("/", (req, res) => {
  console.log(req.body);

  res.status(200).json({
    success: true,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${process.env.PORT}`);
});
