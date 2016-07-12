myScan.controller('AddProductCtrl', ['$scope','$firebaseArray','$ionicPlatform', 'productService', '$ionicNavBarDelegate', '$state', '$q', '$rootScope',
   function($scope, $firebaseArray, $ionicPlatform, productService, $ionicNavBarDelegate, $state, $q, $rootScope) {


     // Get reference to inventory in firebase
     var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");

      // Get barcode to add product information to
     var product = $rootScope.productToUpdate;

      // Set product image to be product.image
      $("#productImage").attr('src', productService.getProductImage());

      // Set product barcode
      document.getElementById('barcodeInput').value = productService.getProductToAdd();

       $scope.addProductPressed = function() {

         // Get input values
         var productName = document.getElementById('productName').value;
         var productQuantity = document.getElementById('productQuantity').value;
         var productBarcode = document.getElementById('barcodeInput').value;

         // Add new product based on new input
         inventoryRef.push({ 'productName': productName, 'quantity': productQuantity, 'barcode': productBarcode, 'image': productService.getProductImage() });

         // Transition to view products
         $state.go('viewproducts');

       };






    //
    // $rootScope.productToUpdate;
    //
    // // Variable to track if productExists, initially set to false
    // var productExists = false;
    //
    // // Variable to track productToUpdate
    // var productToUpdate = null;
    //
    // // Get reference to inventory in firebase
    // var inventoryRef = new Firebase("https://myscan.firebaseio.com/inventory");
    //
    //  // Get barcode to add product information to
    // var barcode = productService.getProductToAdd();
    //
    //  // Set input field to barcode
    //  document.getElementById('barcodeInput').value = barcode;
    //
    //  // Set product image to be scanned product
    //  var productImage = productService.getProductImage();
    //  $("#productImage").attr('src', productImage);
    //
    //
    //  // Get current inventory in firebase
    //  inventoryRef.once('value').then(function(inventorySnapshot) {
    //
    //    // Store firebase snapshot in inventoryData
    //     var inventoryData = inventorySnapshot.val();
    //
    //     // Loop through products in database
    //     for (var product in inventoryData) {
    //
    //       // See if barcode matches a barcode in database
    //       if (inventoryData[product].barcode == barcode) {
    //
    //         // Match found, set productExists to true
    //         productExists = true;
    //
    //         // Match found, set productToUpdate to product
    //         productToUpdate = product;
    //
    //         // Set match to be currentProduct
    //         var currentProduct = inventoryData[product];
    //
    //         // Set button to be 'Update'
    //         document.getElementById('productButton').innerText = "Update";
    //
    //         // Set productName field to be equal to currentProduct name
    //         document.getElementById('productName').value = currentProduct.productName;
    //
    //         // Set productName field to be equal to currentProduct name
    //         document.getElementById('productName').value = currentProduct.productName;
    //
    //         // Set productQuantity field to be equal to currentProduct quantity
    //         document.getElementById('productQuantity').value = currentProduct.quantity;
    //
    //       } else {
    //
    //         // Set title to be 'Add Product'
    //         // $ionicNavBarDelegate.title('Add Product');
    //
    //         // Set button to be 'Add'
    //         document.getElementById('productButton').innerText = "Add";
    //
    //       }
    //
    //     }
    //
    //   }, function(error) {
    //     alert(error);
    //   });
    //
    //   $scope.addProductPressed = function() {
    //
    //     // Get input values
    //     var productName = document.getElementById('productName').value;
    //     var productQuantity = document.getElementById('productQuantity').value;
    //     var productBarcode = document.getElementById('barcodeInput').value;
    //
    //     if (productExists) {
    //
    //       // Update product based on new input and product to update
    //       inventoryRef.child(productToUpdate).update({ 'productName': productName, 'quantity': productQuantity });
    //
    //     } else if (!productExists) {
    //
    //       // Add new product based on new input
    //       amazonService.getItemInfo(productBarcode).then(function(itemData) {
    //         itemData = $.parseXML(itemData);
    //         var itemImage = itemData.getElementsByTagName("Item")[0].children[4].getElementsByTagName('URL')[0].textContent;
    //
    //         inventoryRef.push({ 'productName': productName, 'quantity': productQuantity, 'barcode': productBarcode, 'image': itemImage });
    //       });
    //
    //
    //     }
    //
    //     // Transition to view products
    //     $state.go('products');
    //
    //   };

   }
]);
