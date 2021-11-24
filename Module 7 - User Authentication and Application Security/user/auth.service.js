var Jwt = require("jsonwebtoken");
var fs = require("fs");

exports.createToken = function (data) {
  return new Promise(function (resolve, reject) {
    var mysecretkey = fs.readFileSync("./key.txt");
    Jwt.sign(
      data,
      mysecretkey,
      {
        expiresIn: "500000s",
      },
      function (err, token) {
        if (err) {
          console.log("Error while creating token");

          reject();
        } else {
          console.log("token created is", token);
          resolve(token);
        }
      }
    );
  });
};

// exports.refreshToken = function() {}

// below code is for decoding the token
// var result = Jwt.decode(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9lIERjdW5oYSIsImlhdCI6MTYyOTczNDYyNn0.yUszPak3Q3KU0e4hgsY493Gf8mNQsrxgZKj1ynW3Ers",
//   "mysecretkeyiskepthere"
// );

// console.log("data from token is", result);

//\\//\\//\\//\\\