
// filter and map

const myNum = [1, 2,3 ,4, 5, 6];
let newNum = myNum.filter( (num) => num + 10)
console.log(newNum);

newNum = myNum.map( (num) => num + 10);
console.log(newNum);

const newNum1 = [];
myNum.forEach( (num) => {
    
    newNum1.push(num+10)
})
// console.log(newNum1);