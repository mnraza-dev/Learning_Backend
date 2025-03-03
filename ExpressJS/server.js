import express from "express";
const app = express();
const hostname = "127.0.0.1";
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let teaData = [];
let nextId = 1;

app.post("/tea", (req, res) => {
  const { name, price } = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };

  teaData.push(newTea);
  res.status(200).send(newTea);
});

app.get("/tea", (req, res) => {
    res.status(200).send(teaData);
});
app.listen(PORT, hostname, () => {
  console.log(`Server is running on  http://${hostname}:${PORT}`);
});
