// console.log(Object.getOwnPropertyNames(global))
// require , module  exports , import  =: module function exiquter hai(module function  reper)




const fs  = require('fs')
fs.writeFile("write.txt" , "hello world this is suraj" , (err) => {
    if(err) {
        console.log(err)
    }
})






// .....................................

let count = 0;
const interval = setInterval(() => {
    console.log(`interval count : ${++count}`)
    if(count == 4){
        clearInterval(interval)
    }
},1000)


//  let a = 5;
// //  console.log(a++); // Output: 5
//  console.log(++a)
// console.log(count);   // Output: 6let count = 5;
// console.log(++count); // Output: 6
// console.log(count);   // Output: 6
