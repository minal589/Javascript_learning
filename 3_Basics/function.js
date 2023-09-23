// add two number

function add(no1, no2=5){
    console.log(no1 + no2);
}

const res = add(2, 0);
// console.log(res);

const user = {
    name: "minal",
    age: 18
}

function handleObj(anyObj){
    console.log(`username is ${anyObj.name} and age is ${anyObj.age}`);
}
handleObj(user);

const myArr = [100, 200, 300,400];

function returnVal(getArray){
    return getArray[2];
}

// console.log(returnVal(myArr));

let string = "I am fine!";

// var revSen = reverseBySep(string, "")
// console.log(revSen);
// function reverseBySep(string, separator ){
//     return string.split(separator).reverse().join(separator);
// }

console.log(string.split("").reverse().join(""));
// console.log(string.reverse());