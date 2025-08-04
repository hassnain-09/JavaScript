// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add to end
// myArr.pop() // remove from end
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // add to start
// myArr.shift() // remove from start

// console.log(myArr.includes(9));    // check if value exists and return boolean
// console.log(myArr.indexOf(3));     // return index of value, if not found return -1
// console.log(myArr.lastIndexOf(3)); // return last index of value, if not found return -1

// const newArr = myArr.join() // convert array to string
// const newArr = myArr.join(" - ") // convert array to string with separator
// console.log(newArr);

// console.log(myArr);
// console.log( newArr);

// slice, splice
// slice - returns a new array, does not modify the original array.It does not include the end index
// splice - modifies the original array and returns the removed elements.It does NOT include the last index — because it's not about index range, it's about count

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myn2)
