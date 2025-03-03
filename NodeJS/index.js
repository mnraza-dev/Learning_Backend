import dotenv from "dotenv";
import http from "http";

dotenv.config();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

const PORT = process.env.PORT || 3000;
server.listen(3000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
