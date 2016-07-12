myScan.controller('ViewProductsCtrl', ['$scope','$firebaseArray','$ionicPlatform', '$rootScope', '$state', 'productService', 'firebaseReference',
   function($scope,$firebaseArray,$ionicPlatform, $rootScope, $state, productService, firebaseReference) {

     // Get reference to Firebase inventory
     var inventoryRef = firebaseReference.child("inventory");

     $rootScope.productToUpdate = null;

     // Set inventory equal to data in firebase
     $scope.inventory = $firebaseArray(inventoryRef);

     // A product was clicked on
     $scope.productClicked = function(product) {

       // Set productToUpdate equal to product clicked on
       $rootScope.productToUpdate = product;
       $state.go('updateproduct');

     };

   }
]);
