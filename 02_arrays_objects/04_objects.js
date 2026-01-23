/* A singleton object is an object that allows only one instance
 and provides a global point of access to it */


// ++++++++Simple singleton using an object literal+++++

const user = {
  name: "Rahul",
  age: 25
};
// export default user;


// +++++++++++Singleton using a class+++++++++++++++

class User {
  constructor() {
    if (User.instance) {
      return User.instance;
    }

    this.name = "Rahul";
    User.instance = this;
  }
}

const u1 = new User(); // object created and stored in User.instance
const u2 = new User(); // if condition called because User.instance exists

console.log(u1 === u2);