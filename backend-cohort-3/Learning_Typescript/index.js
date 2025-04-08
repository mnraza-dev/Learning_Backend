"use strict";
let x = 8;
console.log(x);
// Problem - 01 
function greet(firstName) {
    return "Hello " + firstName;
}
console.log(greet("Abdul"));
// Problem - 02
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 6));
// Problem - 03
function delayedCall(fn) {
    setTimeout(fn, 2000);
}
delayedCall(function () {
    setTimeout(() => {
        console.log("Hi after 2 seconds");
    }, 1000);
});
