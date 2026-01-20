let score = undefined

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1  false => 0
// null => 0
// undefined => NaN
// "" => 0

let isLoggedIn = ""

let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolIsLoggedIn)
// console.log(typeof boolIsLoggedIn)

// 1 => true   0 => false
// null => false
// "" => false
// "m" => true
// undefined => false

let value = 22

let valueInString = String(value)
// console.log(valueInString)
// console.log(typeof valueInString)

// 22 => "22"
// false => "false"
// undefined => "undefined"



/********** Operations ****************/

let str1 = "hi"
let str2 = "wassup"
let str3 = str1 + str2
// console.log(str3)


// console.log(1 + 2 + "3");
// console.log("1" + 2 + 3);

let x = 10
// console.log(x++)
// console.log(++x)