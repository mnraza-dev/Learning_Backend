import dotenv from "dotenv";
import { app } from "./app.js";


dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});