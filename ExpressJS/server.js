import express from 'express';


const app = express();
const hostname = '127.0.0.1';
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT,hostname, () => {
  console.log(`Server is running on  http://${hostname}:${PORT}`);
});
