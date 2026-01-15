//event callback

const EventEmitter = require('events')

const emmiter  = new EventEmitter()


//methd 1.emit(evntName , [arg]) ----create



emmiter.on("GREET" , () => {
    console.log("HELLO WORLD....")
})


emmiter.emit("GREET")



///arg
// emmiter.on("datasaved" , (username , id) => {
//     console.log(`ata save succcessfully saved......... ${username} ---${id} `)
// })

// emmiter.emit("datasaved" , "raviraj" , "1223323sdkjj22111")

emmiter.on("datasaved" , (arg) => {
    console.log(`ata save succcessfully saved......... ${arg.username} ---sssssss${arg.id} `)


})

emmiter.emit("datasaved" ,{
    username : "ravirak",
    id : "122333shshj211"
})





//2 .   on(evntName , [arg])------excure




