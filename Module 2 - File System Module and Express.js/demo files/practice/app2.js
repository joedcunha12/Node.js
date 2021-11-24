var fs = require("fs");

var express = require("express");
const e = require("express");

var server = express();

var port = 6500;

server.get("/", function (req, res) {
  res.send("<h1>Welcome to the expresss server</h1>");
});

server.get("/getmovies", (req, res) => {
  fs.readFile("./data/db.json.json", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(JSON.parse(result));
    }
  });
});

server.listen(port, (err) => {
  console.log("server is running on " + port);
});
