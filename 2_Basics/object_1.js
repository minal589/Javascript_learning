// object literal

const myval = Symbol("key1");

const user = {
    name: "Minal",
    age: 18,
    location: "Mumbai",
    email: "minal@gmail.com",
    isLogin: false,
    "gender": "female",
    [myval]: "mykey1"

}
// console.log(user.email);
// console.log(user["email"]);

// console.log(user.gender);
// console.log(user["gender"]);

// console.log(user[myval]);

console.log(user);

user.email = "xyz@gmail.com";
// Object.freeze(user);// we cannot alter any value after we freeze the object
user.gender = "male";
// console.log(user);


user.greet = function(){
    console.log("hello user");
}

user.greet1 = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(user.greet1());
