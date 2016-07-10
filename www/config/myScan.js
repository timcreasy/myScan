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
    controller: 'HomeCtrl'
  }).state('products', {
    url: '/products',
    templateUrl: 'views/products.html',
    controller: 'ProductsCtrl'
  }).state('addproduct', {
    url: '/addproduct',
    templateUrl: 'views/addproduct.html',
    controller: 'AddProductCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
