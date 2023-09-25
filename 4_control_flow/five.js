const program =  ['js', 'cpp' , 'rb', 'swift', 'python']

program.forEach( function (item) {
    // console.log(item);
});

program.forEach( (item) => {
    console.log(item);
})

const myCode = [
    {
        langName: "java",
        fileName : "js"
    },
    {
        langName: "python",
        fileName : "py"
    },
    {
    langName: "c++",
    fileName : "cpp"
    }
]

myCode.forEach( (item) => {
    console.log(item.langName);
    console.log(item.fileName);
}) 