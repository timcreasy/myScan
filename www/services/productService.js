myScan.service('productService', function() {
  // var productList = [];

  var productToAdd = null;

  // var addProduct = function(newObj) {
  //     productList.push(newObj);
  // };
  //
  // var getProducts = function(){
  //     return productList;
  // };

  var setProductToAdd = function(productBarcode) {
    productToAdd = productBarcode;
  };

  var getProductToAdd = function() {
    return productToAdd;
  };

  return {
    setProductToAdd: setProductToAdd,
    getProductToAdd: getProductToAdd
  };

});
