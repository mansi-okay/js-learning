
// const user = new Object()
const user ={}

user.id = "123abc"
user.name = "mansi"
user.isLoggedIn = false
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("isLoggedIn"));



const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mansi"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);



// +++++++ methods to combine objects++++++++++

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" } 

// const obj4 = {obj1, obj2}

// const obj4 = Object.assign({}, obj1,obj1,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
];
// console.log(users[1].email);



// ++++++++Object destructuring+++++++

const { id, name:username } = user;
console.log(id); 
console.log(username); 