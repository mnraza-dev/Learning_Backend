const fs = require("fs");

fs.readFile("./f1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.writeFile("./f2.txt", "Hello there Im file 2 🚀", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});
