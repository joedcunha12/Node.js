var ProductModel = require("./product.model");

exports.createProduct = function (data) {
  return new Promise(function (resolve, reject) {
    data.productid = Date.now();
    var validproductdata = new ProductModel(data);
    validproductdata.save().then(
      (newproduct) => {
        console.log("new product added to database", newproduct);
        resolve();
      },
      (error) => {
        console.log("Error in storing the data in db", error);
        reject();
      }
    );
  });
};

exports.findProduct = function (productid) {
  console.log("here we will find the product details ", productid);
  return new Promise(function (resolve, reject) {
    ProductModel.findOne({ productid: productid }).then((result) => {
      console.log("Product details from the db are ", result);
      if (result) {
        return resolve(result);
      }
      reject("no Product found for this id");
    });
  }).catch((error) => {
    console.log("error in finding product details", error);
    reject();
  });
};

// exports.allProducts = (productid) => {
//   return new Promise(function (resolve, reject) {});
// };
// exports.showallproducts = function () {
//   return new Promise(function (resolve, reject) {
//     ProductModel.find().then(
//       (result) => {
//         console.log("show all vidoess", result);
//         resolve();
//       },
//       (error) => {
//         console.log("error in finding in db", error);
//         reject();
//       }
//     );
//   });
// };
