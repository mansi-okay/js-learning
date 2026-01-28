function User(email,password){
    this._email = email

    this.password = password      // setter called
    // better calling in this case cuz we need password length>6

    Object.defineProperty(this, "email", {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, "password", {
        get : function(){
            return "******"
        },
        set: function(value){
            if (value.length < 6) {
                throw new Error("Password too short");
            }
            this._password = value;
        }
    })

}

const u1 = new User("mansi@mail", "1sghsdfgksgkf")
console.log(u1);
console.log(u1.email);        // getter named email called
u1.email = "abjhsd@mail"      // setter  called