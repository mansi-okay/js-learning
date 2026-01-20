// console.log("02" >= 1)

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

/* Happens because == and 
   comparision (> < <= >=)operator {converts null to 0}
   work different
*/

// console.log(undefined<0)
// console.log(undefined==0)
// console.log(undefined>=0)


// avoid inconsistent conversions 

// === does strict check, comapares value + type
console.log(undefined==null)   //true 
console.log(undefined===null)   //false

