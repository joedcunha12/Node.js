var axios = require("axios");
var Service = require("./service");

// exports.fileUpload = function (req, res) {
//   Service.uploadFile(req.body, function () {});
// };

exports.getCakes = function (req, res) {
  axios({
    method: "get",
    url: "https://apifromashu.herokuapp.com/api/allcakes",
  })
    .then(function (response) {
      console.log("response from my private / personal server", response.data);
      res.send({
        cakes: response.data.data,
      });
    })
    .catch(error);
  res.status(500).send({
    error: "internal server error",
  });

  console.log("error from my private site", error);
};

exports.signup = function (req, res) {
  console.log("req reached to controller");
  Service.sendMail(req.body, function (error, data, callback) {
    // if (error) {
    //   res.status(500).send({
    //     error: "internal server error",
    //   });
    // } else {
    //   res.send({
    //     message: "user registered",
    //   });
    // }

    // callback() chaining example
    console.log("ndfjdhdhfkdhfdkhfkdffkdhfdhkh");
  });
};

exports.initateOffer = function (req, res) {
  var candidate = require("./promisedemo");

  candidate
    .manish(req.body.filename)
    .then(function () {
      return "start packing babies!!!";
    }) // promise chaining
    .then(function () {})
    .then(function () {})
    .then(function () {})
    .then(function () {});
};

// callback chaining example

// function a(cb) {
//   cb(function (cb) {
//     cb(function (cb) {
//       cb(function (cb) {
//         cb(function (cb) {
//           cb(function (cb) {});
//         });
//       });
//     });
//   });
// }

// a(function (cb) {});
