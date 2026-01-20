"use strict"  //makes js more strict, safer and less error-tolerant


// JavaScript is a dynamically typed language


/*********Primitive datatypes********/

// 7 types:
// number => 2 to power of 53
// bigint
// string => ""
// boolean => true/false
// null => memory allocated and intentionally set to "no value"
// undefined => memory allocated but no value has been assigned yet
// symbol => unique, immutable value to avoid name collisions

const id = Symbol("123")   // datatype of Symbol => Symbol
const id2 = Symbol("123")
console.log(id === id2);

const bigNumber = 12788259347742797342729n 

console.log(typeof undefined)  // datatype of null => object
console.log(typeof null)  // datatype of undefined => undefined


/********Refrence datatypes (Non-primitive)*******/

// Array, Objects, Functions
// datatype of non primitives is "object"

const arr = ["elem1", "elem2", "elem3"]

let myObj ={
    name: "mansi",
    pin: 12345
}

const myFunction = function(){
    console.log("my function");
}

//datatype of functions is named function but is still object (object function)
console.log(typeof myFunction)
