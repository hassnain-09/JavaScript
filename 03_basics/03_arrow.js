const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`)
    console.log(this)
  },
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//++++++++++++++++++++++++++++++Important Notes about This keyword++++++++++++++++++++++++++++++++
// In node context, this only works in objects, to refrence the context of the object like properties of object
// Out side curl braces, this returns empty object
// Inside the function with function keyword, this does work like it can pick properties in it's context
// Also inside arrow function, this behaves the same

const chai = () => {
  let username = "hitesh"
  console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" })

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
