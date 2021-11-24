var express = require("express");

var server = express();

var fs = require("fs");

var path = require("path");

var bodyparser = require("body-parser");
server.use(bodyparser.json());

var port = 5000;

server.listen(port, function () {
  console.log("server is lisenting on", port);
});

var staticpath = path.resolve(__dirname, "../public");
server.use(express.static(staticpath));

server.get("/", function (req, res) {
  console.log(
    "request received here and now after processing requesting we will send response back"
  );
  res.send(path.resolve(__dirname, "../public/index.html"));
});

server.get("/readfile", function (res, res) {
  var filePath = path.resolve(__dirname, "../package.json");
  console.log(" path is ", filePath);
  fs.readFile(filePath, function (error, data) {
    if (error) {
      console.log("error", error);
      res.send("some error occured");
    } else {
      console.log("data", data);
      res.send(data.toString());
    }
  });
});

server.post("/readfile", function (req, res) {
  var request = JSON.stringify(req.body);
  var requestJson = JSON.parse(request);
  console.log("....coming from post method", requestJson, request);
  res.send("Hello our first post route");
});

server.get("/*", function (req, res) {
  res.send("Page not found! what you are looking for.");
});
