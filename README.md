# Learning Backend

1. Intro to nodejs
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
