myScan.controller('AddProductCtrl', ['$scope','$firebaseArray','$ionicPlatform', 'productService', '$ionicNavBarDelegate', '$state', '$q', '$rootScope',
   function($scope, $firebaseArray, $ionicPlatform, productService, $ionicNavBarDelegate, $state, $q, $rootScope) {


     // Get reference to inventory in firebase
     var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");

      // Get barcode to add product information to
     var product = $rootScope.productToUpdate;

      // Set product image to be product.image
      $("#productImage").attr('src', productService.getProductImage());

      // Set product barcode
      document.getElementById('barcodeInput').value = productService.getProductToAdd();

       $scope.addProductPressed = function() {

         // Get input values
         var productName = document.getElementById('productName').value;
         var productQuantity = document.getElementById('productQuantity').value;
         var productBarcode = document.getElementById('barcodeInput').value;

         // Add new product based on new input
         inventoryRef.push({ 'productName': productName, 'quantity': productQuantity, 'barcode': productBarcode, 'image': productService.getProductImage() });

         // Transition to view products
         $state.go('viewproducts');

       };
   }
]);
