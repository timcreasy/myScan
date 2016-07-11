myScan.controller('ProductsCtrl', ['$scope','$firebaseArray','$ionicPlatform', '$rootScope', '$state', 'productService',
   function($scope,$firebaseArray,$ionicPlatform, $rootScope, $state, productService) {

     // Get reference to Firebase inventory
     var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");

     $rootScope.productToUpdate = null;

     // Set inventory equal to data in firebase
     $scope.inventory = $firebaseArray(inventoryRef);

     // A product was clicked on
     $scope.productClicked = function(product) {

       // Set productToUpdate equal to product clicked on
       $rootScope.productToUpdate = product;

     };

   }
]);
