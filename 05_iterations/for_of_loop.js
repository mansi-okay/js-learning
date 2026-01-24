// for of
// for...of → loops over values (like on Array / String / Map / Set)

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);    
}


const string = "Hello Hi"
for (const str of string) {
    // console.log(`Each char is: ${str}`);
}


// Maps

// maps can have any data type as keys
let newMap = new Map();
newMap.set(1, "one");
newMap.set({a:1}, "object key");
newMap.set(() => {}, "function key");
// console.log(newMap);


const map = new Map()
map.set("In", "India")
map.set("USA","United States of America")
map.set("Fr","Frace")
map.set("In", "India")
map.set("Ind", "India")
// console.log(map);

for (const [key,value] of map) {
    console.log(`key: ${key}, value: ${value}`);
}


const myObject = {
    g1: 'game1',
    g2: 'game2'
}

//for of does not work on normal objects

// for (const [key,value] of myObject) {
//     console.log(`key: ${key}, value: ${value}`);    
// }