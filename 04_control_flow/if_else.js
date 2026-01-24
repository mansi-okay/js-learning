// if
// <, >, <=, >=, ==, !=, ===, !==


const isUserLoggedIn = true
// if (isUserLoggedIn){
//     console.log("Executed");
// }


const temperature = 63
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else if(temperature < 45) {
//     console.log("temperature is less than 45");
// } else{
//     console.log("temperature is greater than 50");
// }


const score = 200
// if (score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`) 
// }
// console.log(`User power: ${power}`) //out of scope


const balance = 1000
// if (balance>500) console.log("yes");    //implicit scope


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 1>2){
    console.log("Allow to buy product");    
}


const loggedInFromEmail = false
const loggedInFromGoogle = true

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");   
}