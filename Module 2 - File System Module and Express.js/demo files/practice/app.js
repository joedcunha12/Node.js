var fs = require("fs");

fs.readFile("./data/db.json.json", function (err, result) {
  if (err) {
    console.log("written error message");
  } else {
    console.log(JSON.parse(result));
  }
});

fs.appendFile("./data/textfile.txt", "new text file\n", function (err) {
  if (err) throw err;
  else {
    console.log("written successfully");
  }
});
