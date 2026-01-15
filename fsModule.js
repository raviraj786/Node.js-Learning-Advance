const fs = require("fs");

// sync - bloacking code
// async - unbloacking code







//------------write...........................................,

// fs.writeFileSync("./text.txt" , "hey world sync write" )

// fs.writeFile("./text.txt", "hello this code is async", (err) => {
//   console.log(err);
// });

// fs.writeFile("./fswrite.txt", "hello this code is async", (err) => {
//   console.log(err);
// });







//-----------------read-------------------------------------------

// const res = fs.readFileSync("./text.txt" , "utf-8")
// console.log(res) hello this code is async


// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(data);  hello this code is async
//   }
// });




//-------------------------update // append----------------------
 
// fs.appendFileSync("./text.txt" , new Date().toDateString())

fs.appendFile("./log.txt" , `helllo world this new file login${new Date().toDateString()}\n` , (err , res) => {
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})




//delete


//----------- fs.cpSync // copy folder--------------

// let res = fs.cpSync("log.txt" , "copy.txt");
// console.log(res)



// -----------fs.unlinkSync // File delete karna-------------
// let res = fs.unlinkSync("copy.txt")
// console.log(res)


// fs.mkdirSync ---------Folder banana

// fs.mkdirSync("myfsfolder")
// console.log("folder created")





// fs.statSync--------info finding
// const info = fs.statSync("log.txt")
// console.log(info)


