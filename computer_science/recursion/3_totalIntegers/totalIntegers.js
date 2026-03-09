const totalIntegers = function (arr) {
   
   if (typeof arr !== 'object' && !Array.isArray(arr)) {
       return undefined 
   }
   
   console.log(arr);
   const sets = Object.values(arr);
   
   return sets.reduce((accumulator, cv) => {
      if (Number.isInteger(cv)) {
         return accumulator += 1;
      } else if (cv == null) {
         return accumulator
      } else if (Array.isArray(cv) || typeof cv === 'object') {
         return accumulator += totalIntegers(cv);
      } 

      return accumulator
   }, 0);
};

// Do not edit below this line
module.exports = totalIntegers;
