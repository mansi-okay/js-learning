class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Admin extends User {
    constructor(username, role) {
        super(username);      // no need to use .call(this)
        this.role = role;
    }

    manageUsers() {
        console.log(`${this.username} is managing users`);
    }
}

const a1 = new Admin("mansi", "admin")
a1.logMe()
a1.manageUsers()

console.log(a1 instanceof User);
