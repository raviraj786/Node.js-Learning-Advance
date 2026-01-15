const path = require('path')
const { json } = require('stream/consumers')



console.log("FILENAME" , __filename)
console.log("DIRNAME" , __dirname)



//school managemant 

//1 join
const filepath =  path.join("folder" , "student" , "data.txt" )

console.log(filepath)

//2 
const parsedDataPath = path.parse(filepath)

const resolovedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({
    parsedDataPath,
    resolovedPath,
    extname,
    basename,
    dirname,
})



// JSON.stringify()  Object ko json me change
// JSON.parse()  json ko Object



