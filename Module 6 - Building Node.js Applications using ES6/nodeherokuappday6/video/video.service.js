var videoModel = require("./video.model");

exports.uploading = function (data) {
  return new Promise(function (resolve, reject) {
    data.videoid = Date.now();
    var uploadVideo = new videoModel(data);
    uploadVideo.save().then(
      function (newvideo) {
        console.log("new video link added to database", newvideo);
        resolve();
      },
      (err) => {
        console.log("failed to upload link", err);
        reject();
      }
    );
  });
};

exports.findvideos = function (videoid) {
  console.log("here we will find the vdieos details ", videoid);
  return new Promise(function (resolve, reject) {
    videoModel.findOne({ vidoeid: vidoeid }).then(
      (result) => {
        console.log("video details from the db are", result);
        if (result) {
          return resolve(result);
        } else {
          reject("no id found");
        }
      },
      (err) => {
        console.log("error in finding video details", err);
        reject();
      }
    );
  });
};

exports.showallvideos = function () {
  return new Promise(function (resolve, reject) {
    videoModel
      .find()
      .toArray()
      .then(
        (result) => {
          console.log("show all vidoess", result);
          resolve();
        },
        (error) => {
          console.log("error in finding in db", error);
          reject();
        }
      );
  });
};
