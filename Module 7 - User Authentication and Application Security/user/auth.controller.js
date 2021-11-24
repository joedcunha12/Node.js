var jwt = require("jsonwebtoken");

exports.isAuthenticated = function (req, res, next) {
  var token = req.headers.authorization;
  console.log("token is", req.headers.authorization);
  jwt.verify(token, "mysecretkeyiskepthere", function (err, result) {
    console.log("error", err, result);
    if (err) {
      res.render("notauthorized");
    } else {
      next();
    }
  });
};
