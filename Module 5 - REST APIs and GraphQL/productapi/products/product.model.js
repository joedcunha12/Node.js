var Mongoose = require("mongoose");

var ProductSchema = Mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  image: { type: String },
  productid: { type: String, required: true, unique: true },
  quantity: { type: Number, default: 10 },
});

var ProductModel = Mongoose.model("products", ProductSchema);

module.exports = ProductModel;
