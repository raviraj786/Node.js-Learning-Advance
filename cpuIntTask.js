process.env.UV_THREADPOOL_SIZE =  5

const crpto = require('crypto')

let start = Date.now()


// tread ko incrrese karna
 



crpto.pbkdf2("passowed-1" , "salt1" , 100000 , 1024 , "sha512" , () => {
    console.log(`${Date.now() - start}ms  done`)
    
})
crpto.pbkdf2("passowed-1" , "salt1" , 100000 , 1024 , "sha512" , () => {
    console.log(`${Date.now() - start}ms  done`)
    
})
crpto.pbkdf2("passowed-1" , "salt1" , 100000 , 1024 , "sha512" , () => {
    console.log(`${Date.now() - start}ms  done`)
    
})
crpto.pbkdf2("passowed-1" , "salt1" , 100000 , 1024 , "sha512" , () => {
    console.log(`${Date.now() - start}ms  done`)
    
})
