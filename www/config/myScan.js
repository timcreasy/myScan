myScan.config(function($stateProvider, $urlRouterProvider){
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
});
