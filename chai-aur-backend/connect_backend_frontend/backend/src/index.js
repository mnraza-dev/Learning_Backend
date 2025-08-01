import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import jokes from "./data/index.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/jokes", (req, res) => {
  res.json({
    message: "Jokes fetched successfully",
    jokes: jokes.map((joke) => ({
      id: joke.id,
      content: joke.content,
    })),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
