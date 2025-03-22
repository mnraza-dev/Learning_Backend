const path = require("path");

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

let ext = path.extname(__filename);
console.log(ext);