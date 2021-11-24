var express = require("express");

var bodyparser = require("body-parser");

var port = process.env.PORT || 5000;

var server = express();

var Mongoose = require("mongoose");

var dburl = "mongodb://localhost:27017/nodeedurekajune";

Mongoose.connect(dburl)
  .then(function () {
    console.log("Connected to database");
  })
  .catch(function (error) {
    console.log("error in connecting to database", error);
  });

server.use(bodyparser.json());
server.use("/api", require("./routes"));

server.listen(port, () => {
  console.log("server is running on", port);
});



