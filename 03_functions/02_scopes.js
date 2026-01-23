var a = "var"
let b = "let"
const c = "const"     //global scope - accessible everythere

// var is scoped to the nearest function.
// If no function exists, it becomes global.

function demo(){
    var x = 1
    let y = 2
    const z = 3

    if (true){
        var p = "var";
        let q = "let";
        const r = "const";
        console.log(p,q,r); // all accessible inside block
    }

    console.log(p); 
    // var is scoped to nearest function so accesible anywhere inside function
    //  even if declared inside a block

    // console.log(q,r);  
    //let and const are block-scoped so not accessible outside the block
    
}

demo()

// console.log(x); 
// error because function scoped variables exist only inside the function
console.log(a,b,c);