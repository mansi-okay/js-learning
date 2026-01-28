const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// console.log(Math.PI)
Math.PI = 5
// console.log(Math.PI)



const user = {
    name: "mansi",
    isLoggedIn : false,
    greet : function(){
        console.log(`Hello`);
    }
}

Object.defineProperty(user, "name", {
    writable:false,
    enumerable: false

})

console.log(Object.getOwnPropertyDescriptor(user, "name"));

// name not an ennumerable property so it does not show up in loop
// for (const key in user) {
//     console.log(user)  
// }    
for (const [key,value] of Object.entries(user)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`); 
    }
}