// Dates
//Months are starting from 0
// 0 => January, 1 => February, ..., 11 => December

// in YYYY-MM-DD format months are starting from 1
// 2023-01-14 => January 14, 2023
// 2023-02-14 => February 14, 2023

let myDate = new Date()
// console.log(myDate.toString()) //Sun Aug 03 2025 15:10:47 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toDateString()) //Sun Aug 03 2025
// console.log(myDate.toTimeString()) //15:10:47 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toISOString()) //2025-08-03T10:10:47.000Z
// console.log(myDate.toLocaleDateString()) //8/3/2025
// console.log(myDate.toLocaleTimeString()) //3:10:47 PM
// console.log(myDate.toLocaleString()) // 8/3/2025, 3:10:47 PM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // 167353600000
// console.log(myCreatedDate.getFullYear()); // 2023
// console.log(myCreatedDate.getMonth()); // 0 => January
// console.log(myCreatedDate.getDate()); // 14  // console.log(myCreatedDate.getDay()); // 6 => Saturday
// console.log(myCreatedDate.getHours()); // 0
// console.log(myCreatedDate.getMinutes()); // 0
// console.log(myCreatedDate.getSeconds()); // 0
// console.log(myCreatedDate.getMilliseconds()); // 0
// console.log(Math.floor(Date.now()/1000)); // CONVERT TO SECONDS

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
})

const now = new Date()

// console.log(now.toLocaleString()) // "8/2/2025, 11:59:23 PM" (depends on locale)
// console.log(now.toLocaleString("en-GB")) // "02/08/2025, 23:59:23"
// console.log(now.toLocaleString("ur-PK")) // "2/8/2025, 11:59:23 PM"
// console.log(now.toLocaleString("fr-FR")) // "02/08/2025 à 23:59:23"

// now.toLocaleString("en-US", {
//   weekday: "long", // "Saturday"
//   year: "numeric", // "2025"
//   month: "long", // "August"
//   day: "numeric", // "2"
//   hour: "2-digit", // "11"
//   minute: "2-digit", // "59"
//   second: "2-digit", // "23"
//   hour12: true, // 12-hour format
// })

//Only Date
// now.toLocaleDateString() // e.g., "8/2/2025"
// now.toLocaleDateString("en-GB"); // "02/08/2025"
// now.toLocaleDateString("ur-PK"); // "2/8/2025"

//Only Time
// now.toLocaleTimeString() // e.g., "11:59:23 PM"
// now.toLocaleTimeString("en-GB"); // "23:59:23"
// now.toLocaleTimeString("ur-PK"); // "11:59:23 PM"

//Custom Time Format(24-hour format )
// now.toLocaleTimeString("en-GB", { hour12: false })
// "23:59:23"
