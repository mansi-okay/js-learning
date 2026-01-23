// Object literals

const sym1 = Symbol("key")
const sym2 = Symbol("key")

const user = {
    "user name": "Mansi",
    [sym1]: "KeyOne",
    city: "Jaipur",
    email: "mansi@gmail.com",
    isLoggedIn: false,
    recentOrders: ["Order#101", "Order#205", "Order#309"]
}
user[sym2] = "KeyTwo"


// console.log(user.email);
// console.log(user["city"]);
// console.log(user["user name"]);
// console.log(user[sym1]);


// console.log(Object.keys(user)); //symbol keys not visible
// console.log(Object.getOwnPropertySymbols(user));


// user.email = "mansiag@gmail.com"
// Object.freeze(user)
// user.email = "mansi@gmail.com"
// console.log(user);


// "this" refers to the object that is currently being created or used

user.greeting = function(){
    console.log(`hellow! ${this["user name"]}`);
}

console.log(user.greeting());
console.log(user);