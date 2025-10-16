const fs = require("fs");

const md = `
 This is a new file
=======================

Node-js Essential Training 

* File Operation 
* Synchronous
* Asynchronous

`;

fs.writeFile("javascript.md", md, (err) => {
  if (err) {
    throw err;
  }

  fs.appendFileSync("javascript.md", "\n\n ### Node.js ");
  console.log("file is created");
});
