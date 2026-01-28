// functions in JavaScript are objects.

// .prototype :
// it is a property of functions only
// When a function is called with new, the created instance’s [[Prototype]] is set to Function.prototype
// new Fn()  →  instance.[[Prototype]] = Fn.prototype

// console.log(typeof Object);
// console.log(typeof Array);
// console.log(typeof String);
//All functions in JavaScript (including built-in ones like Object, Boolean, Array, Function, etc.) are objects.


function multipleBy5(num){
    return num * 5
}
multipleBy5.power = 2 //attaching a property to it like an object

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);   



function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score ++
}

createUser.prototype.printMe = function(){
    console.log(`Score: ${this.score}`);
    
}

const u1 = new createUser("mansi", 100) 
const u2 = createUser("user2", 10)
// console.log(u2);   // undefined cuz createUser does not return anything 

u1.increment()
u1.printMe()

// u2.printMe() 
// throws error cuz u2 is not instance of createUser
// so it does not inherit the instance methods set using .prototype