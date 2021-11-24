var express = require("express");

var router = express.Router();

router.use("/product", require("./products"));

module.exports = router;
