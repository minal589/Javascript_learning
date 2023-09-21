const num = [1, 2, 3, 4];
const char = ['a','b', 'c'];
const bool = ['true', 'false'];

// const mix = num.concat(char); // combind tow array

const mix = [...num, ...char, ...bool] // combind two  or more array
console.log(mix);

let sc1  = 100;
let sc2 = 200;
let sc3 = 300;
console.log(Array.of(sc1, sc2, sc3));