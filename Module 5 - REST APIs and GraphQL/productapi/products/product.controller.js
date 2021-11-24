var productService = require("./product.service");

exports.addProduct = function (req, res) {
  productService
    .createProduct(req.body)
    .then((result) => {
      res.send({
        message: "Product added",
      });
    })
    .catch((error) => {
      res.send({
        error: " Internal server error",
      });
    });
};

exports.productDetails = function (req, res) {
  console.log("product id received to be shown is", req.params.productid);
  productService.findProduct(req.params.productid);
};

// exports.allProduct = function (req, res) {};
// exports.allProduct = function (req, res) {
//   console.log("video id received to be shown is ", req.body);
//   videoService.showallproducts(req.body);
// };
