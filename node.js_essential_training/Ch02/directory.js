const fs = require("fs");

if (fs.existsSync("your-file-here")) {
  console.log("Already is Exits");
} else {
  fs.mkdir("your-file-here", (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log("Directory is created");
    }
  });
}
