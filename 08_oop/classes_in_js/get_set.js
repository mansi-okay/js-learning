class User {
    constructor(email, password){
        this.email = email
        // this.password = password   // does not call setter
        this.password = password    //calls setter

    }

    get password(){
        return "**********"
    }

    set password(value) {
        if (value.length < 6) {
        throw new Error("Password too short");
        }
        this._password = value;
        // this.password = value 
        // would have called the the setter recursively leading to call stack overflow
    }
}

// const u1 = new User("mansi@mail", "123")  //error
const u1 = new User("mansi@mail", "1sfdhjsgafka2")
console.log(u1);

console.log(u1.email);  // no getter called cuz email is property of User


console.log(u1.password);       
// calls getter cuz password property not in u1
// Look on User.prototype → getter names password found
u1.password = "!23hfjghsjkfshg"       // calls setter