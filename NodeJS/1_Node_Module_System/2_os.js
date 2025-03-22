const os = require("os");

console.log(os.arch()); // x64
console.log(os.platform()); // win32

console.log(os.homedir());
console.log(os.hostname()); 
console.log(os.release());

console.log('NETWORK: ', os.networkInterfaces());

console.log(os.cpus().length);
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.uptime());

console.log(os.userInfo());
console.log(os.freemem());



