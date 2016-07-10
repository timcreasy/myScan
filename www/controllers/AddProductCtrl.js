myScan.controller('AddProductCtrl', ['$scope','$firebaseArray','$ionicPlatform', 'productService',
   function($scope, $firebaseArray, $ionicPlatform, productService) {

     // Get reference to inventory in firebase
     var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");

     // Get barcode to add product information to
     var barcode = productService.getProductToAdd();

     // Set input field to barcode
     document.getElementById('barcodeInput').value = barcode;


     $scope.addProductPressed = function() {
       console.log("add");
       var productName = document.getElementById('productName').value;
       var productQuantity = document.getElementById('productQuantity').value;

       inventoryRef.push({ 'productName': productName, 'quantity': productQuantity, 'barcode': barcode });
     };


   }
]);
