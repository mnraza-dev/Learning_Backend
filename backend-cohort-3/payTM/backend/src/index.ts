import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {

    console.log(`Server started at http://localhost:${port}`);
});