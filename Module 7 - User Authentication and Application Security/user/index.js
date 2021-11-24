var express = require("express");

var router = express.Router();

var userController = require("./user.controller");

var AuthController = require("./auth.controller");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/upload", AuthController.isAuthenticated, userController.upload);

module.exports = router;
