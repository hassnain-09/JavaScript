const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
]

//Foreach never return a value
// it returns undefined
//it neither modifies nor return unless you explicitly modifies it by it third arugemnt like

// const nums = [1, 2, 3];

// nums.forEach((num, index, arr) => {
//   arr[index] = num * 2; // Directly modifying the original array
// });

// console.log(nums); // [2, 4, 6] → original changed!

myCoding.forEach((item) => {
  console.log(item.languageName)
})
