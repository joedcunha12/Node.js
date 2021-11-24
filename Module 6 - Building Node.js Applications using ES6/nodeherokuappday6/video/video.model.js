var mongoose = require("mongoose");

var videoSchema = mongoose.Schema({
  name: { type: String, required: true },
  videoid: { type: String, required: true, unique: true },
  image: { type: String },
  videourl: { type: String, required: true, unique: true },
  date: { type: String, required: true },
});

var videoModel = mongoose.model("videos", videoSchema);

module.exports = videoModel;
