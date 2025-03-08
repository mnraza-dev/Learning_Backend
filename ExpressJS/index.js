import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Home Route");
});
app.get("/about", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Welcome to About Route",
    data: null,
    error: null,
    success: true,
    statusCode: 200,
  });
});
app.get("/contact", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Welcome to Contact Route",
    data: null,
    error: null,
    success: true,
    statusCode: 200,
  });
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
