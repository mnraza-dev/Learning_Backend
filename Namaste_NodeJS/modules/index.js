import {calculateSum} from "./sum.js";
import {multiplication} from "./multiplication.js";
import {division} from "./division.js";

console.log("from index.js, Sum is : ", calculateSum(16, 12));
// console.log(x);

console.log("Multiply: ", multiplication(6, 7));


console.log("Divide: ", division(16, 8));


// Note:
/**
 * 1. Common JS modules are older way of writing modules
 * 2. It is also called cjs
 * 3. To export a module use:  module.exports = {}
 * and to Import from a module use: require('./sum')
 * 4. It has synchronous behaviour
 * 5. non strict mode
 * 6. It is by default  used in NodeJS
 */

/**
 * 1. ES6 modules are newer way
 * 2. It is also called esm or mjs
 * 3. To export a module use: export default {}
 * and to Import from a module use: import {calculateSum} from './sum'
 * 4. It has asynchronous behaviour available
 * 5. It has strict mode
 * 6. It is by default used in React, Angular
 */


