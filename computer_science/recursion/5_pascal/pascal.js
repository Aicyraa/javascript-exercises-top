const pascal = function(n) {
   
   const nextPascal = [] 
   
   if (n === 1 ) {
      return [1]
   }

   const prevPattern = pascal(n - 1)
   prevPattern.push(0)
   prevPattern.unshift(0)
   
   for (let i = 0; i < prevPattern.length - 1; i++) {
      const [consNumA, consNumB] = [prevPattern[i], prevPattern[i + 1]]
      nextPascal.push(consNumA + consNumB)
   }
   
   return nextPascal

};
  
// Do not edit below this line
module.exports = pascal;
