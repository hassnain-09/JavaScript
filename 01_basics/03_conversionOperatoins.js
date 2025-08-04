let score = ""

// console.log(typeof score)
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
// console.log(typeof NaN) // NaN is a number type

// *********************** Type Conversion by Numnber ***********************
// "33" => 33
// "33abc" => NaN
// "" => 0
//  true => 1; false => 0
// null => 0;
//  undefined => NaN
// NaN => NaN

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// *********************** Type Conversion by Boolean ***********************
// 1 => true;
//  0 => false
// "" => false
// "hitesh" => true
// null => false
// undefined => false
// NaN => false

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
console.log(1 + 2 + "2")

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); = // 1
// console.log(+false); // 0
// console.log(+null); // 0
// console.log(+undefined) // NaN
// console.log(+NaN) // NaN
// console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
// console.log(gameCounter)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
