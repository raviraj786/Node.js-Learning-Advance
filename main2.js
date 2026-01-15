const fs  = require('fs');

setImmediate(() => console.log("hello from immediate task") )

setTimeout(() => {
console.log("hello setimeout1")
},0)

 console.log("hello worls")