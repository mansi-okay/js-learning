var c = 300

let a = 20 

if (true){
    let a = 10
    const b = 20
    var c = 30   // c changes 
    
    console.log("inner ", a);
    
}

// console.log("outer ", a); 
// console.log(b); //error
// console.log(c);



function One(){
    const userName = "mansi"

    function Two(){
        const website = "github"
        console.log(userName);
    }

    // console.log(website); // error cuz website out of scope

    Two()
}

One()



if (true) {
    const username = "mansi"
    if (username === "mansi"){
        const website = "github"
        console.log(username + website);     
    }
    // console.log(website);     //error
}
// console.log(username); //error



// ++++++++++ Function as Expression and hoisting++++++++++++

console.log(sayHello());    // function name + body hoisted 
function sayHello() {
  console.log("Hello");
}


// function expressions hoist only the variable not the function body

console.log(sayHi)  //with var the variable is initialized as undefined
// sayHi()  //error function body not hoisted
var sayHi = function(){
    console.log("Hi");    
}

// sayBye   //error cuz wth let and const the variable is hoisted but placed in the TDZ
// sayBye() //error function body not hoisted
const sayBye = function () {
  console.log("Bye")
}