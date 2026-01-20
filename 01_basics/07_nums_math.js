/**************** Numbers ***************/

const num = 30
// console.log(num);

const balance = new Number(2093.4299)
// console.log(balance)

// console.log(typeof balance.toString())
// console.log(balance.toFixed(2))     //fixed decimal places
// console.log(balance.toPrecision(3))  //total significant digits

const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN'));


/****************** Maths **************/

console.log(typeof Math);

// console.log(Math.abs(-4));      
// console.log(Math.round(2.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.max(2,5,6,2,8));

console.log(Math.random());    // range => [0,1)
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);
/*
max-min+1 = 20-10+1 = 11
this is how many integers needed:
10, 11, 12, ..., 20  → 11 numbers total

Math.random()                                 => [0,1)
Math.random() * (max-min+1)                   => [0,11)
Math.floor(Math.random() * (max-min+1))       => [0,10]
Math.floor(Math.random() * (max-min+1)) + min => [10,20]
*/
