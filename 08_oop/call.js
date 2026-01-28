function setUsername(username){
    this.username = username
    console.log("called");   
}


function createUser(username, email, password){
    setUsername.call(this, username)   
    // call invokes setUsername immediately and explicitly sets "this" inside setUsername
    // "this" is the same object being created by new createUser()
    this.email = email
    this.password = password
}

const u1 = new createUser("mansi", "mansi@mail", "123")
console.log(u1);