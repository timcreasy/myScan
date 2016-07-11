myScan.controller('HomeCtrl', ['$scope','$cordovaBarcodeScanner','$ionicPlatform', '$ionicPopup', 'productService', '$state', 'amazonService',
  function($scope,$cordovaBarcodeScanner,$ionicPlatform, $ionicPopup, productService, $state, amazonService) {

  // Barcode scanning utility function
  $scope.scan = function(){
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {

          // If barcode is not empty and was not cancelled
          if (barcodeData.text !== "" && barcodeData.cancelled !== 1) {

            // Set productToAdd
            productService.setProductToAdd(barcodeData.text);

            amazonService.getItemInfo(barcodeData.text).then(function(itemData) {

              // Get item info
              itemData = $.parseXML(itemData);
              var itemImage = itemData.getElementsByTagName("Item")[0].children[6].getElementsByTagName('URL')[0].textContent;
              productService.setProductImage(itemImage);

              // Go to addproduct
              $state.go('addproduct');
            });

          }

      }, function(error) {

          // Show popup containing scanning error
          $ionicPopup.show({
            title: "Barcode Scanning Error",
            template: error,
            buttons: [{
              text: 'Dismiss',
              type: 'button-default'
            }]
          });

      });
    });
  };

}]);
