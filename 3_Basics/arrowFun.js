const user = {
    name : "minal",
    price : 200,

    Greeting : function(){
        // console.log(`${this.name} , Welcome website`);
        // console.log(this);
    }
    
}

// console.log(user.name);
// user.Greeting();
// console.log(this);

// function one(){
//     let name = "minal";
//     console.log(this.name);
// }

// const one = function(){
//     let uname = "minal";
//     console.log(this.uname);
// }

const one = () => { 
    let uname = "minal";
    console.log(this.uname);
}
//one();
// method 1
const add = (n1, n2) => {
        return n1+n2;
}
// method 2
const sum = (n1, n2) => (n1+n2)
console.log(add(3, 4));

