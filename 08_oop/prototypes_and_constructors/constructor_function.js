const user = {
    username: "mansi",
    signedIn: true,           // properties
    getUserDetails: function(){         // method
        console.log(`Details of ${this.username}`); 
        console.log(this);         
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());

 

// +++++++Constructor function and new keyword +++++

// Every time a constructor function is called using the new keyword,
//  it creates a new, unique instance (object)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}
User.someMethod = function(){}  // static method thus instances do not have access to it

// Without new → this refers to the global object
// thus User running like a normal function and not an instance of User
const someUser = User("name", 1, false)
console.log(someUser);   // a global object is stored in someUser because user returns "this"
console.log(someUser.constructor);  //Object


// With new → this refers to the newly created object
const userOne = new User("mansi", 2, true) 
const userTwo = new User("github", 5, false)

console.log(userOne.constructor);  // User
console.log(userTwo instanceof User);