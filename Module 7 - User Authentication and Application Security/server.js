var express = require("express");

var server = express();

var port = process.env.PORT || 6000;

var routes = require("./routes");

var Mongoose = require("mongoose");

var dburl = "mongodb://localhost:27017/day7ofnodejs";

var bodyparser = require("body-parser");

server.use(bodyparser.json());

var AuthService = require("./user/auth.service");
AuthService.createToken({ name: "Joe Dcunha" });

server.use("/api", routes);

server.set("view engine", "ejs");

server.get("/login", (req, res) => {
  // res.render("signup");
  res.render("login");
});

server.listen(port, () => {
  console.log("server is running on", port);
  Mongoose.connect(dburl).then((client) => {
    console.log("mongodb connected");
  });
});
