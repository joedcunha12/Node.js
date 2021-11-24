var express = require("express");
var ProductController = require("./product.controller");
var router = express.Router();

router.post("/addproduct", ProductController.addProduct);
// router.post("/allproducts", ProductController.allProducts);
router.get("/:Productid", ProductController.productDetails);

module.exports = router;
