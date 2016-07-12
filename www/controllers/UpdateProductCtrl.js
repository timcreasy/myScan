myScan.controller('UpdateProductCtrl', ['$scope','$firebaseArray','$ionicPlatform', 'productService', '$ionicNavBarDelegate', '$state', 'amazonService', '$q', '$rootScope', 'firebaseReference',
   function($scope, $firebaseArray, $ionicPlatform, productService, $ionicNavBarDelegate, $state, amazonService, $q, $rootScope, firebaseReference) {

    // Get reference to inventory in firebase
    var inventoryRef = firebaseReference.child("inventory");

     // Get barcode to add product information to
    var product = $rootScope.productToUpdate;

     // Set productName field to be equal to currentProduct name
     document.getElementById('productName').value = product.productName;

     // Set productQuantity field to be equal to currentProduct quantity
     document.getElementById('productQuantity').value = product.quantity;

     // Set productName field to be equal to currentProduct name
     document.getElementById('barcodeInput').value = product.barcode;

     // Set product image to be product.image
     $("#productImage").attr('src', product.image);


      $scope.updateProductPressed = function() {

        // Get input values
        var productName = document.getElementById('productName').value;
        var productQuantity = document.getElementById('productQuantity').value;
        var productBarcode = document.getElementById('barcodeInput').value;

        // Update product based on new input and product to update
        inventoryRef.child(product.$id).update({ 'productName': productName, 'quantity': productQuantity });

        // Transition to view products
        $state.go('viewproducts');

      };

   }

]);
