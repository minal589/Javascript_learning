// Reduce

// const num = [1, 2, 3];

// const myTotal = num.reduce(function(acc, crrVal) {
//     console.log(`acc : ${acc} and crrval : ${crrVal}`);
//     return acc + crrVal;
// }, 0)
// console.log(myTotal);

// const mytotal = num.reduce( (acc, crr) => acc+crr, 0)
// console.log(mytotal);

const shoppingCart = [
    {
        item : "books",
        price : 300
    },

    {
        item : "gadget",
        price : 2000
    },
    {
        item : "course",
        price : 500
    }
]

const total = shoppingCart.reduce( (acc, item) => acc+item.price, 0)
console.log(total);