// for of

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world"
for (const greet of greeting) {
    // console.log(`${greet}`);
}

// map

const map = new Map();
map.set(1, "one")
map.set(2, "two")
map.set(3, "three")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

for (const key in map) {
    console.log(map[key]);
}