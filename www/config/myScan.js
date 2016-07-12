myScan.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('index',{
    url:'/',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl',
  }).state('viewproducts', {
    url: '/viewproducts',
    templateUrl: 'views/viewproducts.html',
    controller: 'ViewProductsCtrl'
  }).state('addproduct', {
    url: '/addproduct',
    templateUrl: 'views/addproduct.html',
    controller: 'AddProductCtrl'
  }).state('updateproduct', {
    url: '/updateproduct',
    templateUrl: 'views/updateproduct.html',
    controller: 'UpdateProductCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
