var fs = require("fs");

exports.manish = function (offerletter) {
  return new Promise(function (resolve, reject) {
    fs.readFile(offerletter, function (err, data) {
      if (err) {
        reject();
      } else {
        var salary = Number.parseInt(data.toString());
        if (salary >= 150000) {
          resolve();
        } else {
          reject();
        }
      }
    });
  });
};

// manish().then(
//   function (response) {
//       console.log("accepted offer")
//   },
//   function (error) {
//     console.log("rejected offer")
//   }
// );
