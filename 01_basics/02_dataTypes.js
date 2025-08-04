"use strict" // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3) // code readability should be high

console.log("Hassnain")

let name = "Hassnain"
let age = 18
let isLoggedIn = false
let state

//PRIMITIVE TYPES
// number => 1, 2, 3, 4, 5, -1, -2, -3, -4, -5
// bigint => 1234567890123456789012345678901234567890n
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique
// NaN => Not a Number, but it is a number type
// object

//Typeof operator
console.log(typeof undefined) // type is  undefined . So, this mean undefined is a type
console.log(typeof 3) // type is number
console.log(typeof "Hassnain") // type is string
console.log(typeof null) // type is  object
console.log(typeof NaN) // type is number
console.log(typeof true) // type is boolean
console.log(typeof Symbol("id")) // type is symbol
console.log(typeof [1, 2, 3]) // type is object
console.log(typeof { name: "Hassnain" }) // type is object
console.log(typeof function () {}) // type is function, which is a special type of object
console.log(typeof Symbol("id")) // type is symbol
console.log(typeof BigInt(1234567890123456789012345678901234567890)) // type is bigint

// Reference Types
// Array, Object, Function
