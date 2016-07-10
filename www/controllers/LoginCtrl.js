myScan.controller('LoginCtrl', ['$scope', 'Auth',
  function($scope, Auth) {

  // Login button was pressed
  $scope.loginPressed = function() {

    // Get userName and userPassword
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;

    // Login user
    Auth.loginUser(userName, userPassword);

  };

}]);
