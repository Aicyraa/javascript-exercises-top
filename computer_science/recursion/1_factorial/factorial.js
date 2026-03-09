const factorial = function (n) {
   
   // validation
   if (typeof n !== 'number' || n % 1 !== 0 || n < 0) {
      return undefined;
   }
   
   // base case
   if (n === 1 || n == 0) {
      return n != 1 ? 1 : n;
   } else {
      return n * factorial(n - 1)
   }
};

// Do not edit below this line
module.exports = factorial;
