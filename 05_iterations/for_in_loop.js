//for in
// for...in → loops over object properties (keys)

const obj = {
    js : "JavaScript",
    py : "Python",
    cpp : "C++" 
}

for (const key in obj) {
    // console.log(`.${key} is extension for ${obj[key]}`);   
}


const programming = ["js", "py", "cpp", "java"]

for (const key in programming) {
    //console.log(`In array at index ${key} is ${programming[key]}`);     
}


// const map = new Map()
// map.set("In", "India")
// map.set("USA","United States of America")
// map.set("Fr","Frace")

// for (const key in map) {
//     console.log(console.log(key));
// }   // no output because no enumerable keys