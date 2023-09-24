// Immediately Invoked Function Expression (IIFE)
// named iife
(function one(){
    console.log("DB Connected");      //  no-argument function
})();

// unnamed iife
((name) => {
    console.log(`welcome website  ${name}`);  // parameterised function
})('Minal');