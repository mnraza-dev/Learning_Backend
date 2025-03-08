import express from "express";
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
