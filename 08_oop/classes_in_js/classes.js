class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const u1 = new User("mansi", "mansi@gmail.com", "123")

console.log(u1.encryptPassword());
console.log(u1.changeUsername());


// Behind the scenes 

function Users(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Users.prototype.encryptPassword = function(){    
    return `${this.password}abc`
}

Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const u2 = new Users("someone", "some@mail", "124323")
console.log(u2.encryptPassword());
console.log(u2.changeUsername());