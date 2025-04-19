import app from "./server";

const port = 3000;
app.listen(3000, () => {
    console.log(` ✨ Server started at http://localhost:${port}`);
});