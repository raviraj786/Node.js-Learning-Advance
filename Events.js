// //event callback

// const EventEmitter = require('events')

// const emmiter  = new EventEmitter()

// //methd 1.emit(evntName , [arg]) ----create

// emmiter.on("GREET" , () => {
//     console.log("HELLO WORLD....")
// })

// emmiter.emit("GREET")

// ///arg
// // emmiter.on("datasaved" , (username , id) => {
// //     console.log(`ata save succcessfully saved......... ${username} ---${id} `)
// // })

// // emmiter.emit("datasaved" , "raviraj" , "1223323sdkjj22111")

// emmiter.on("datasaved" , (arg) => {
//     console.log(`ata save succcessfully saved......... ${arg.username} ---sssssss${arg.id} `)

// })

// emmiter.emit("datasaved" ,{
//     username : "ravirak",
//     id : "122333shshj211"
// })

// //2 .   on(evntName , [arg])------excure

const EventEmitter = require("events");
const fs = require("fs");

const UserEmmiter = new EventEmitter();

const eventCounts = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileupdate: 0,
};

const logfile = "event.json";

if (fs.existsSync(logfile)) {
  const data = fs.readFileSync(logfile, "utf-8");
  Object.assign(eventCounts, JSON.parse(data));
}

function saveCounts() {
  fs.writeFileSync(logfile, JSON.stringify(eventCounts, null, 2));
}
 
UserEmmiter.on("LOGIN", (username) => {
  eventCounts.login++;
  console.log(`${username} Logged In Successfully`);
  saveCounts();
});

UserEmmiter.on("LOGOUT", (username) => {
  eventCounts.logout++;
  console.log(`${username} LoggOut In Successfully`);
  saveCounts();
});

UserEmmiter.on("PURCHASE", (username, item) => {
  eventCounts.purchase++;
  console.log(`${username} Purchase ${item}`);
  saveCounts();
});

UserEmmiter.on("PROFILE_UPDATE", (username, field) => {
  eventCounts.profileupdate++;
  console.log(`${username} update profile - ${field}`);
  saveCounts();
});

UserEmmiter.on("SUMMARY", () => {
  console.log(`\n ${eventCounts}`);
  console.log(`login : ${eventCounts.login}`);
  console.log(`logout : ${eventCounts.logout}`);
  console.log(`purchase : ${eventCounts.purchase}`);
  console.log(`Profile upadate : ${eventCounts.profileupdate}`);
});

//emit event with arg

UserEmmiter.emit("LOGIN", "RAVIRAJ");
UserEmmiter.emit("LOGOUT", "raviraj");
UserEmmiter.emit("PURCHASE", "raviraj", "mobile");
UserEmmiter.emit("PROFILE_UPDATE", "raviraj", "email adress");

UserEmmiter.emit("SUMMARY");
 