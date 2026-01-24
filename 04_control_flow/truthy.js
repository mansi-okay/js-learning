// falsy values 
// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}, .......


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


if (userEmail.length === 0) {
    console.log("Array is mt");
}


const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is mt");    
}


// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 6
// val1 = null ?? 1
val1 = undefined ?? 6
console.log(val1);


// Terniary Operator

//condition ? true : false
const price = 20
price > 30 ? console.log("price > 30") : console.log("price <30");