angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// .config(function($stateProvider, $urlRouterProvider){
//   $stateProvider
//   .state('home',{
//     url:'/home',
//     templateUrl: 'views/home.html',
//     controller: 'HomeCtrl'
//   });
//   $urlRouterProvider.otherwise('/home');
// })

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('index',{
    url:'/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .state('products', {
  url: '/products',
  templateUrl: 'views/products.html',
  controller: 'ProductsCtrl'
  });
  $urlRouterProvider.otherwise('/');
})

// .config(function($stateProvider, $urlRouterProvider){
//   $stateProvider
//   .state('/',{
//     url:'/',
//     templateUrl: 'index.html',
//     controller: 'HomeCtrl'
//   });
//   $urlRouterProvider.otherwise('/');
// })

.controller('ProductsCtrl', ['$scope','$cordovaBarcodeScanner','$ionicPlatform',
   function($scope,$cordovaBarcodeScanner,$ionicPlatform) {
   }
])

.controller('HomeCtrl', ['$scope','$cordovaBarcodeScanner','$ionicPlatform',function($scope,$cordovaBarcodeScanner,$ionicPlatform) {

  $scope.scan = function(){
    console.log("HELLO");
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {
          alert(JSON.stringify(barcodeData));
      }, function(error) {
          alert(JSON.stringify(error));
      });
    });
  }

}]);
