import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
