const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //Concat returns a new array, does not modify the original arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//Flat returns a new array with all sub-array elements concatenated into it, does not modify the original array
//Flat can take a depth argument to specify how deep a nested array should be flattened (default is 1 and Infinity flattens all levels)
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Hitesh")) // check if value is an array then retuns true or false
// console.log(Array.from("Hitesh")) // convert string to array
// console.log(Array.from({ name: "hitesh" })) // in this case it will return an empty array because object is not iterable

const original = [{ name: "Alice" }, { name: "Bob" }]
const shallowCopy = Array.from(original)
shallowCopy[0].name = "Charlie" // This will change the name in both arrays because they reference the same object
console.log(shallowCopy)
console.log(original)
console.log(original === shallowCopy) // false, they are different arrays
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)) // creates a new array with the given elements
