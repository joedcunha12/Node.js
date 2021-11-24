var express = require("express");

var UserController = require("./user.controller");

var router = express.Router();

router.post("/register", UserController.signup);
router.post("/login", UserController.login);
router.get("/allusers", UserController.allUsers);

module.exports = router;
