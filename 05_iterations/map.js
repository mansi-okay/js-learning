const numArray = [1,2,3,4,5,6,7,8,9]

// map transforms every item and returns same length as original array

const nums = numArray.map((num) => { return num >2})
// console.log(nums);

const newNums = numArray.map( (num) => { return num + 10})
// console.log(newNums);

const anotherNums = numArray
                    .map((num) => num * 10)
                    .map((num) => num +4)
                    .filter((num) => num>=40)
console.log(anotherNums);