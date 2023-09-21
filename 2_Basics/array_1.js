
const myArr = [1, 2, 3, 4,5 ,6 , 7];
// console.log(myArr);
myArr.push(8); // add element at last 
myArr.pop()  // remove ele at last

myArr.unshift(9); // add element at 0th index
myArr.shift()  // remove element at 0th index
// console.log(myArr);

// console.log(myArr.includes(9)); // return true or false if value is present or not

const newArr = myArr.join(); 
// console.log(newArr); // this array type is string

// slice & splice


console.log("A ", myArr)
const m1 = myArr.slice(1, 3);
console.log("B ", myArr);

const m2 = myArr.splice(1, 3);
// console.log(m2);
console.log("C ", myArr)
