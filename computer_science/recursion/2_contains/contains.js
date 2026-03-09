const contains = function(object, value) {
   // find the value first in the passed object
   // if the value does not exist -- 
   // get the nested object and call the function again
   const values = Object.values(object)
   const nestedObjects = values.filter(p => p instanceof Object) 

   // base cases : check if the object contains the value 
   // and checks if the object contains another object
   if (values.includes(value)) { return true }
   else if (nestedObjects.length === 0 ) { return false }  
     
   for (const obj of nestedObjects) {
      if (contains(obj, value)) { return true }
      else { continue }
   }

   return false 

};



// Do not edit below this line
module.exports = contains;
