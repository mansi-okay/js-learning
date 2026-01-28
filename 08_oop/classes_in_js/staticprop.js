class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const u = new User("mansi")
// console.log(u.createId());    // error


class Admin extends User {
    constructor(username, email) {
        super(username);     
        this.email = email;
    }
}

const u2 = new Admin("mansi", "mansi@mail")
u2.logMe()
// u2.createId()     // error


console.log(User.createId());
// only class has access to this static method and not its instances