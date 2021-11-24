var express = require("express");
var path = require("path");
var port = process.env.PORT || 7000;

var server = express();

var bodyparser = require("body-parser");

var Mongoose = require("mongoose");

var url = "mongodb://localhost:27017/videos";

Mongoose.connect(url)
  .then(() => {
    console.log("connected to the database ");
  })
  .catch((err) => {
    console.log("error", err);
  });

server.get("/", (req, res) => {
  var filepath = path.resolve(__dirname + "/index.html");
  res.sendFile(filepath);
});

server.use(bodyparser.json());
server.use("api", require("./routes"));

server.listen(port, () => {
  console.log("server is running on ", port);
});
