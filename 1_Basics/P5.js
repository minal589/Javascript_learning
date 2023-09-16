// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createDate = new Date(2023, 1, 20); // (year, month, date)  month start from 0
let createDate = new Date(2023, 1, 20, 3, 1); // (year, month, date, hr, min) 
// console.log(createDate.toLocaleString());

let myTime = Date.now();

console.log(myTime);
console.log(Math.floor(Date.now()/1000));
