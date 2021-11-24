class video {
  name;
  image;
  creationdate;
  videourl;

  storeVideo = function () {
    console.log("Here we will store the video");
  };
  uploadVideo = function () {
    this.name = "Srinivas Kalyanam";
    console.log("....upload", this, this.name, "video");
    setTimeout(() => {
      console.log("inside a arrow func timeout", this);
    }, 2000);
    setTimeout(function () {
      console.log("inside normal func", this);
    }, 2000);
  };
}

var video1 = new video();
video1.uploadVideo;
