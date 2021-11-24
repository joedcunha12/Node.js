const express = require("express");
const NewsController = require("../controllers/controlNews");

const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.get("/", NewsController.getAllNews);
router.post("/", checkAuth, NewsController.addNews);

router.get("/:newsId", checkAuth, NewsController.getNewsById);
router.delete("/:newsId", checkAuth, NewsController.deleteNewsById);
router.patch("/:newsId", checkAuth, NewsController.updateNews);

module.exports = router;
