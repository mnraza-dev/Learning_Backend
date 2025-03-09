# Learning Backend

1. Intro to nodejs
- Nodejs is a runtime environment for executing JavaScript code outside of a browser.
```javascript
import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Home Route \n");
  }
);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```	
2. Creating Our server in nodejs
3. Intro to expressjs
4. Connect Backend with Frontend
5. Middlewares, Status codes and HTTP headers

- Middleware is a function that runs between request and response in short it runs before the route handler.
- Middleware must call next() to continue to the next function in the chain.
- If Middleware does not call next() the request will hang.
- There are some built-in , custom, third party middlewares etc.

```javascript
app.use(cors()); //third party middlewares
```

```javascript
app.use(express.josn()); //built-in middlewares
```

```javascript
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); // custom middlewares
});
```
