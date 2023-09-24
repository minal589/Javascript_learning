function one(){
    const uname = "minal";  // global scope

    function two(){
        const web = "github"; // local scope
        console.log(web);
    }
    console.log(uname);
    two();
}

one()