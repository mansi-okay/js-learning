// Immediately Invoked Function Expressions (IIFE)
// a function that runs as soon as it’s defined


// IIFE prevents global pollution by executing code
//  without leaving variables or functions in the global scope

let apiKey = "123";  // Without IIFE → forced globals
let timeout = 5000;

function startApp() {
  console.log(apiKey, timeout);
}

startApp();


(function () {
  let apiKey = "123";
  let timeout = 5000;  // Everything exists only while the IIFE runs.

  function startApp() {
    console.log(apiKey, timeout);
  }

  startApp();
})();


(function fn() {
    // named IIFE 
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected two ${name}`);    
})("name");
