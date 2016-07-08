myScan.controller('ProductsCtrl', ['$scope','$firebaseArray','$ionicPlatform',
   function($scope,$firebaseArray,$ionicPlatform) {

     var ref = firebase.database().ref().child("inventory");
     $scope.inventory = $firebaseArray(ref);

   }
]);
