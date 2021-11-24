var Mongoose = require("mongoose");

var UserSchema = Mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

var UserModel = Mongoose.model("users", UserSchema);

module.exports = UserModel;
