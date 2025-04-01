require('./xyz');
const calculateSum = require('./sum');
console.log('from index.js, Sum is : ',calculateSum(1,12));	
// console.log(global);
console.log(this); // empty object
console.log(globalThis === global);

// globalThis is the same as global and it is available in all browsers and servers





