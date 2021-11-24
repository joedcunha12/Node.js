var Mongoose = require("mongoose");

var UserSchema = Mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "USER" },
});

var UserModel = Mongoose.model("users", UserSchema);

module.exports = UserModel;
