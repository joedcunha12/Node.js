var UserService = require("./user.service");
var CommonService = require("../common.service");

exports.signup = function (req, res) {
  console.log("email for which we have to create account is", req.body);
  UserService.createUser(req.body)
    .then(function () {
     // CommonService.sendMail(); //when signup we must send welcome mail
      res.send({
        message: "User Registered",
      });
    })
    .catch((error) => {
      if (error) {
        res.status(500).send({
          error: "user is already registered",
        });
      } else {
        res.status(500).send({
          error: "Internal server error",
        });
      }
    });
};

exports.login = function (req, res) {
  console.log("login", req.body);
  var result = UserService.findUser(req.body)
    .on("SUCCESS", function () {
      res.send({
        message: "success",
      });
    })
    .on("INVALID_EMAIL", function () {
      res.status(500).send({
        error: "invalid email",
      });
    })
    .on("INVALID_CREDENTIAL", function () {
      res.status(500).send({
        error: "invalid credential",
      });
    })
    .on("ERROR", function () {
      res.status(500).send({
        error: "server error",
      });
    });

  console.log("Result of find user operation, result", result);
};

exports.allUsers = function (req, res) {
  console.log("allusers", req.body);
  res.send({
    message: "Here we will allusers a user",
  });
};
