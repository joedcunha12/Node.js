var express = require("express");

var router = express.Router();

var videocontroller = require("./video.controller");

router.post("/uploadvideolink", videocontroller.uploadvideo);
router.get("/allvideos", videocontroller.showall);
router.get("/:videoid", videocontroller.particularid);

module.exports = router;
