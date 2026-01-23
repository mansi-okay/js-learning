function printName(){
    console.log("Name"); 
}

// const name = printName()
// console.log(name);    //undefined


function addTwoNumbers(n1, n2){
    // let result = n1 +n2;
    // return result;
    return n1 + n2;
}

const result = addTwoNumbers(3,"3")
// console.log("Result:", result);


function loginUserMessage(username){
    // if(username===undefined){
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage(null));



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300,400));


const user = {
    username: "mansi",
    prices: 500
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}

// handleObject(user)

handleObject({
    username: "jennie",
    price: 200
})


const arr = [100,200,300]

function returnSecondValue(array){
    return array[1]
}

// console.log(returnSecondValue(arr));
console.log(returnSecondValue[100,null,200]);