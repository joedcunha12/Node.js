var express = require("express");

var server = express();

var port = process.env.PORT || 5000;

var bodyparser = require("body-parser");

var Mongoose = require("mongoose");

var url = "mongodb://localhost:27017/prodcuts";

Mongoose.connect(url)
  .then(function () {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("error in connecting to database", error);
  });

server.use(bodyparser.json());
server.use("/api", require("./routes"));

server.listen(port, function () {
  console.log("Server is running", port);
});
