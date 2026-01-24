const numArray = [1,2,3,4,5,6,7,8,9]

// reduce
// reduce takes an array and reduces it to ONE value

// Basic syntax:
/*
array.reduce((accumulator, currentValue) => {
  return newAccumulator;
}, initialValue);

*/

// const total = numArray.reduce(function (acc, curr){
//     console.log(`acc: ${acc}, curr: ${curr}`);   
//     return acc+curr
// },0)

const total = numArray.reduce((acc,curr) => (acc+curr),0)
// console.log(total);



const words = ["Hello", "World", "from", "JS"];
const sentence = words.reduce((acc,currWord) =>{
    return acc + " " + currWord
},"")
// console.log(sentence)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalCartValue = shoppingCart.reduce((acc,item) => {
    return acc + item.price
},0)
console.log(totalCartValue);