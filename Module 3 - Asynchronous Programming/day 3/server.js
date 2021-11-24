var express = require("express");

var server = express();

var port = 5000;

var controller = require("./controller");

var bodyparser = require("body-parser");

// server.get("/upload", controller.fileUpload);
server.use(bodyparser.json());

server.get("./allcakes", controller.getCakes);
server.post("/signup", controller.signup);

server.post("/offer", controller.initateOffer);

server.listen(port, () => {
  console.log("server is running on ", port);
});
