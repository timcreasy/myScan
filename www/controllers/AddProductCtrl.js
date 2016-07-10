myScan.controller('AddProductCtrl', ['$scope','$firebaseArray','$ionicPlatform', 'productService', '$ionicNavBarDelegate', '$state',
   function($scope, $firebaseArray, $ionicPlatform, productService, $ionicNavBarDelegate, $state) {

    // // Get reference to inventory in firebase
    // var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");
    //
    //  // Get barcode to add product information to
    //  var barcode = productService.getProductToAdd();
    //
    // // Set input field to barcode
    // document.getElementById('barcodeInput').value = barcode;
    //
    // $scope.addProductPressed = function() {
    //
    //  var productName = document.getElementById('productName').value;
    //  var productQuantity = document.getElementById('productQuantity').value;
    //  inventoryRef.push({ 'productName': productName, 'quantity': productQuantity, 'barcode': barcode });
    //
    // };

    // $scope.productTitle = "Add Product";

    // Variable to track if productExists, initially set to false
    var productExists = false;

    // Variable to track productToUpdate
    var productToUpdate = null;

    // Get reference to inventory in firebase
    var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");

     // Get barcode to add product information to
    var barcode = productService.getProductToAdd();

     // Set input field to barcode
     document.getElementById('barcodeInput').value = barcode;

     // Get current inventory in firebase
     inventoryRef.once('value').then(function(inventorySnapshot) {

       // Store firebase snapshot in inventoryData
        var inventoryData = inventorySnapshot.val();

        // Loop through products in database
        for (var product in inventoryData) {

          // See if barcode matches a barcode in database
          if (inventoryData[product].barcode == barcode) {

            // Match found, set productExists to true
            productExists = true;

            // Match found, set productToUpdate to product
            productToUpdate = product;

            // Set match to be currentProduct
            var currentProduct = inventoryData[product];

            // Set title to be 'Update Product'
            $ionicNavBarDelegate.title('Update Product');

            // Set button to be 'Update'
            document.getElementById('productButton').innerText = "Update";

            // Set productName field to be equal to currentProduct name
            document.getElementById('productName').value = currentProduct.productName;

            // Set productName field to be equal to currentProduct name
            document.getElementById('productName').value = currentProduct.productName;

            // Set productQuantity field to be equal to currentProduct quantity
            document.getElementById('productQuantity').value = currentProduct.quantity;

          } else {

            // Set title to be 'Add Product'
            $ionicNavBarDelegate.title('Add Product');

            // Set button to be 'Add'
            document.getElementById('productButton').innerText = "Add";

          }

        }

      }, function(error) {
        alert(error);
      });

      $scope.addProductPressed = function() {

        // Get input values
        var productName = document.getElementById('productName').value;
        var productQuantity = document.getElementById('productQuantity').value;
        var productBarcode = document.getElementById('barcodeInput').value;

        if (productExists) {

          // Update product based on new input and product to update
          inventoryRef.child(productToUpdate).update({ 'productName': productName, 'quantity': productQuantity });

        } else if (!productExists) {

          // Add new product based on new input
          inventoryRef.push({ 'productName': productName, 'quantity': productQuantity, 'barcode': productBarcode });

        }

        $state.go('products');

      };

   }
]);
