console.log("Start");

var a = 107383893;
var b = 26373;

setTimeout(function () {
  console.log("Timeout");
}, 0);

setTimeout(() => {
  console.log("Timeout 2 after 3 seconds");
}, 3000);

console.log(a + b);

console.log("End");
