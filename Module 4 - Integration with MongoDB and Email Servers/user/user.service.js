var UserModel = require("./user.model");
var EventEmitter = require("events");

exports.createUser = function (data) {
  return new Promise((resolve, reject) => {
    var validuserdata = new UserModel(data);
    validuserdata
      .save()
      .then(function (newuser) {
        console.log("new user is saved in database", newuser);
        resolve();
      })
      .catch((error) => {
        console.log("error in creating database user", error);
        if (error.code == 11000) {
          reject("duplicate");
        } else {
        }
        reject();
      });
  });
};

// this is for login

// exports.findUser = function (data) {
//   return new Promise((resolve, reject) => {
//     var query = {
//       email: data.email,
//       password: data.password,
//     };

//     UserModel.findOne(query)
//       .then(function (login) {
//         console.log("user is already loggin", login);
//         resolve();
//       })
//       .catch((error) => {
//         console.log("user not found", error);
//         reject();
//       });
//   });
// };

// this is another way for login

exports.findUser = function (data) {
  let emitter = new EventEmitter();
  var query = {
    email: data.email,
  };

  UserModel.findOne(query)
    .then((user) => {
      if (user) {
        //match password
        if (user.password == data.password) {
          return emitter.emit("SUCCESS");
        } else {
          return emitter.emit("INVALID_CREDENTIAL");
        }
      } else {
        return emitter.emit("INVALID_EMAIL");
      }
    })
    .catch(() => {
      return emitter.emit("ERROR");
    });

  return emitter;
};
