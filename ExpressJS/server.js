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

app.get("/tea/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tea = teaData.find((t) => t.id === id);
    if (!tea) {
      res.status(404).send("Tea not found");
    } else {
      res.status(200).send(tea);
    }
  });

app.put("/tea/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const tea = teaData.find((t) => t.id === id);
    if (!tea) {
      res.status(404).send("Tea not found");
    } else {
      tea.name = name;
      tea.price = price;
      res.status(200).send(tea);
    }
  }
);

app.delete("/tea/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tea = teaData.find((t) => t.id === id);

    if (!tea || teaData.length === 0 || id === -1) {
      res.status(404).send("Tea not found");
    } else {
      teaData = teaData.filter((t) => t.id !== id);
      res.status(200).send(tea);
    }
});

app.listen(PORT, hostname, () => {
  console.log(`Server is running on  http://${hostname}:${PORT}`);
});
