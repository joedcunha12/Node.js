var fs = require("fs");

fs.writeFile("day2.txt", "\n\n\n\n\n hi joe here", function (error) {
  if (error) {
    console.log("Error in writing a file");
  }
});
fs.rename("day2.txt", "day2New.txt", function (error, result) {
  if (error) {
    console.log("eroor in writinng a file");
  }
});

var error = fs.writeFileSync("syn.txt", "here we are writing in sync");

console.log("error is ", error);

// var result = fs.mkdirSync("api2");

// fs.rm()

console.log(
  "Reading all modules in node_modules",
  fs.readdirSync("node_modules")
);
