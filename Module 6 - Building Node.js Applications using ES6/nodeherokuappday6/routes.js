var express = require("express");

var router = express.Router();

router.use("/videos", require("./video"));

module.exports = router;
