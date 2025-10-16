const fs = require("fs");

// understand of Synchronous and Asynchronous

console.log("1. Start Sync");

// Sync
const data = fs.readFileSync("file.txt", "utf8");
console.log("2. Sync content:", data);

console.log("4. End Sync");

// Async

console.log("Start Async");

fs.readFile("file.txt", "utf8", (err, asyncData) => {
  console.log("3. Async content:", asyncData);
});

console.log("End Async");
