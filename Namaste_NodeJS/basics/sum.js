function calculateSum(a, b) {
  const sum = a + b;
  return sum;
}

var x = "Hello devs!";
module.exports = {
  calculateSum,
};

module.exports.x = x;

// above syntax is same as
// module.exports.calculateSum = calculateSum;
// module.exports.x = x;

// module.exports = {
//   calculateSum,
//   x,
// };
