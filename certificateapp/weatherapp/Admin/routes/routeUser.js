const express = require("express");
const router = express.Router();

const UserController = require("../controllers/controlUser");
const checkAuth = require("../middleware/check-auth");

router.get("/", checkAuth, UserController.getAllUsers);
router.post("/", UserController.addUser);

module.exports = router;
