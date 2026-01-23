const user = {
    userName: "mansi",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome`);
        console.log(this);       
    }
}

// this refers to the object that is calling the function


// user.welcomeMessage()
// user.userName = "emm"    
// user.welcomeMessage()

//console.log(this);  // current context -> {} (module.exports)

/* In a web browser, the global object is window
console.log(this) // window in browser
*/


function someFn(){
    let username = "emm"
    console.log(this.username);
    console.log(this);   //context when regular function call -> global
}
// someFn()
// undefined cuz variables (var,let,const) are NOT properties of context object
// this accesses object properties, not variables


const arrowFn = () => {
    let username = "mansi"
    console.log(this);    // context here is parent so {} (module.exports)
}
// arrowFn()



// const addTwo = (num1,num2) => {
//     return num1 + num2
// }       // with {} we need to write return

// const addTwo = (num1,num2) => num1 +num2 

//const addTwo = (num1,num2) => (num1 +num2 )    //with () we do not need to write "return"

const addTwo = (num1,num2) => ({username: "mansi"})

console.log(addTwo(3,4));



const myArray = [1,2,3,4,5]
myArray.forEach(() => {})


/*
| Location                          | `this`                |
| --------------------------------- | --------------------- |
| Node top-level                    | `module.exports` `{}` |
| Regular function (non-strict)     | `global`              |
| Regular function (`"use strict"`) | `undefined`           |
| Method call (`obj.fn()`)          | `obj`                 |
| Arrow function                    | inherits from parent  |
*/