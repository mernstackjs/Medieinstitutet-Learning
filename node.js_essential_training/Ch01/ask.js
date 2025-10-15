// ask.js - simple Node.js readline example

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);

  rl.question("How old are you? ", (age) => {
    console.log(`You are ${age} years old.`);

    rl.close();
  });
});

rl.on("close", () => {
  console.log("Goodbye!");
  process.exit(0);
});
