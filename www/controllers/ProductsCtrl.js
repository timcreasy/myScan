myScan.controller('ProductsCtrl', ['$scope','$firebaseArray','$ionicPlatform',
   function($scope,$firebaseArray,$ionicPlatform) {

     // Get reference to Firebase inventory
     var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");

     // Set inventory equal to data in firebase
     $scope.inventory = $firebaseArray(inventoryRef);

   }
]);
