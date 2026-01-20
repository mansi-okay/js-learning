const arr = [0 ,1, 2 ,3 , 4, 5]

const someArray = new Array(1,3 ,45 ,true)
// console.log(someArray[2]);

/*
// JavaScript array-copy operations create shallow copies

// Shallow copy:
// Copies only the first level
// Nested objects share reference

let a = { x: 1, y: { z: 2 } };
let b = { ...a };   // shallow

b.x = 0;
console.log(a.x); // 1 (unchanged)

b.y.z = 5;
console.log(a.y.z); // 5 (changed)
*/


// +++++++++++Array Methods+++++++++++++

// arr.pop()
// arr.push(24)

// arr.unshift(0)
// arr.shift()

// console.log(arr.includes(5));
// console.log(arr.indexOf(2));

// console.log(arr);

const newArr = arr.join()
// console.log(newArr);
// console.log(typeof newArr);


// ++++++  slice and splice ++++++++

console.log("Original arr: ", arr);

arr1 = arr.slice(1,3)
console.log(arr1);

console.log("Original arr after slice: ", arr);

arr2 = arr.splice(1,3)
console.log(arr2);

console.log("Orginal arr after splice: ", arr);