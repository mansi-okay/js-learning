// Lexical scope = where a variable or function is written in the code determines where it can be accessed.
   

// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//         console.log(name); 
//     }
// // displayName was defined inside init, so it can access outer variables
//     displayName();
// }
// init();


// function outer(){
//     let username = "someone"
//     // console.log("OUTER", secret); // error
//     function inner(){
//         let secret = "my123"
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//         // console.log(secret); //error
//     }
//     inner()
//     innerTwo()
// }
// outer()
// // console.log("TOO OUTER", username);  //error



// Closure : When a function is returned, JS packs it with a backpack containing all the variables it might need later

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

// Here not only the execution context of displayName is getting there but the whole lexical scope
//OR
// JS sees that displayName still needs name
// So the lexical environment of makeFunc is NOT garbage-collected
// A closure is formed

const myFunc = makeFunc();
// then makeFunc execution context is popped
// BUT its lexical environment is kept alive
// because displayName still references it

// So lexically, displayName has access to:
// its own scope
// makeFunc’s scope (name)
// global scope
myFunc();