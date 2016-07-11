myScan.service('productService', function() {

  var productToAdd = null;
  var productImage = null;

  var setProductToAdd = function(productBarcode) {
    productToAdd = productBarcode;
  };

  var getProductToAdd = function() {
    return productToAdd;
  };

  var setProductImage = function(image) {
    productImage = image;
  };

  var getProductImage = function() {
    return productImage;
  };

  return {
    setProductToAdd: setProductToAdd,
    getProductToAdd: getProductToAdd,
    setProductImage: setProductImage,
    getProductImage: getProductImage
  };

});
