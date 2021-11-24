var videoService = require("./video.service");

exports.uploadvideo = function (req, res) {
  videoService
    .uploading(req.body)
    .then((result) => {
      res.send({
        message: "video link has been added",
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: "internal server error",
      });
    });
};

exports.particularid = function (req, res) {
  console.log("video id received to be shown is ", req.params.videoid);
  videoService.findvideos(req.params.videoid);
};

exports.showall = function (req, res) {
  console.log("video id received to be shown is ", req.body);
  videoService.showallvideos(req.body);
};
