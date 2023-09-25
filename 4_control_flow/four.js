const myobj = {
    js: 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobj) {
    // console.log(key);  // retrive key
    // console.log(myobj[key]); // retrive value
    console.log(`${key} :-  ${myobj[key]}`);

}



const arr = ['js', 'cpp' , 'rb', 'swift']
for (const key in arr) {
    console.log(arr[key]);
}