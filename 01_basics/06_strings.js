const name = "mansi"
const id = 101

console.log(`Hi my name is ${name} and my id is ${id}`);


/********* string object ******/

const newName = new String("mansi-ag-mansies")  
console.log(typeof newName);

/* stores the string like: 
 {
   [[StringData]]: "hello"   // internal, immutable slot
 }
*/

// console.log(newName[4]);
// console.log(newName.__proto__) 

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(4))
// console.log(newName.indexOf('m'))

const stringOne = newName.substring(0,5)  //converts -ve to 0
console.log(stringOne);

const stringTwo = newName.slice(-16,5)
console.log(stringTwo);

const stringThree = "      mansi     "
console.log(stringThree);
console.log(stringThree.trim());

const url = "http://example.com/my%20file.txt"
console.log(url.replace('%20', '-'));
console.log(url.includes('it'))

console.log(newName.split('-'));


