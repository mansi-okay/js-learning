/******* Memory ***********/

// Stack (Primitve) and Heap (Non-primitive)

let email1 = "mansi@gmail.com"

let email2 = email1  // copy of email1 passed
email2 = "mansi@proton.mail"

// console.log(email1)
// console.log(email2)

let user1 = {
    email: "user1@gmail.com",
    id: 11
}

let user2 = user1 // refrence of user1 passed
user2.email = "user2@gmail.com"

console.log(user1.email)
console.log(user2.email)