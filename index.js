// const os  = require('os')

// console.log(os.cpus().length)

const http = require("http");
const fs = require("fs");

const PORT = 8080;

const app = http.createServer((request, response) => {
  //   response.end("Http server working");

  const log = `${Date.now()} : New Request Reciveed\n `;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Error writing to");
      response.statusCode = 500;
      response.end("Internal server Error");
      return;
    }

    response.end("Heelo Server working");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


