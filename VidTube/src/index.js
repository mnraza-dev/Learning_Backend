import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8001;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://127.0.0.1:${PORT}`);
    });
    
  })
  .catch((error) => {
    console.log(`DB Connection Error: ${error}`);
    process.exit(1);
  });


