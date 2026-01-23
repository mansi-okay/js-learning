const array1 = ["one", "two", "three"]
const array2 = ["four", "five", "six", "seven"]

array1.push(array2)
// console.log(array1[3][0]);

const array3 = array1.concat(array2)
// console.log(array3);

const array4 = [1,...array1, ...array2, ..."hello"]  //spread operator => "..."
// console.log(array4);


const newArr = [1,2,3,[4,5,6],7,[8,9,[10,11],12]]
const anotherArr = newArr.flat(Infinity)
// console.log(anotherArr);


// console.log(Array.isArray([1, 2, 3]))  
// console.log(Array.isArray("okay"))
// console.log(Array.isArray({ a: 1 }))


// console.log(Array.from("abc"));
// console.log(Array.from([1, 2, 3], (value,index) => value + index));
// console.log(Array.from(new Set([1,2])) )
// console.log(Array.from({length:3})); //obj not iterable, looks for numeric property "length"
// console.log(Array.from({size:3}));  // empty array created


console.log(Array.of(1,"o",3,true));
console.log(Array.of());
console.log(Array.of(5)); // [7]
console.log(Array(5)); // array of 5 empty slots