const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

const otherNumber = 123.8266

// console.log(otherNumber.toPrecision(6))

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"))

// const num = 1234567.89
// num.toLocaleString() // "1,234,567.89" (based on browser locale)
// num.toLocaleString("de-DE") // "1.234.567,89"
// num.toLocaleString("hi-IN") // "12,34,567.89"
// num.toLocaleString("ur-PK") // "12,34,567.89"

const price = 1999.99

// price.toLocaleString("en-US", {
//   style: "currency",
//   currency: "USD",
// }) // "$1,999.99"

// price.toLocaleString("en-GB", {
//   style: "currency",
//   currency: "GBP",
// }) // "£1,999.99"

// price.toLocaleString("ur-PK", {
//   style: "currency",
//   currency: "PKR",
// }) // "Rs 1,999.99"

// 📊 Compact Formatting (e.g., 1K, 1M)

const bigNumber = 1000000

// bigNumber.toLocaleString("en-US", {
//   notation: "compact",
// }) // "1M"

// bigNumber.toLocaleString("en-US", {
//   notation: "compact",
//   compactDisplay: "long",
// }) // "1 million"

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random())
// console.log(Math.random() * 10 + 1)
// console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
