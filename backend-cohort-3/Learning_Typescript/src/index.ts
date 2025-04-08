
let x: number | string = 8
console.log(x);

// Problem - 01 

function greet(firstName: string) {
    return "Hello " + firstName
}
console.log(greet("Abdul"));

// Problem - 02
function sum(a: number, b: number): number {
    return a + b
}
console.log(sum(4, 6));

// Problem - 03
function delayedCall(fn: () => void) {
    setTimeout(fn, 2000)
}
delayedCall(function () {
    setTimeout(() => {
        console.log("Hi after 2 seconds");

    }, 1000);
})

