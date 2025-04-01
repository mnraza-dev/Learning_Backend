require('./xyz');
const {calculateSum, x} = require('./sum');
console.log('from index.js, Sum is : ',calculateSum(1,12));	
// console.log(global);
console.log(this); // empty object
console.log(globalThis === global);

console.log(x);























// globalThis is the same as global and it is available in all browsers and servers

// modules are protected by default in node - it protects variables and functions from leaking 







