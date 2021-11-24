var express = require("express");
var request = require("request");

var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  request.get(
    "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees",
    function (error, response, body) {
      res.render("index", { employeeList: JSON.parse(body) });
    }
  );
});

app.listen(8000);
