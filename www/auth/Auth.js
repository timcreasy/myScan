myScan.service("Auth", function($ionicPopup, $firebaseAuth, $state, firebaseReference) {
  var ref = firebaseReference;

  this.loginUser = function(userName, userPassword) {
    ref.authWithPassword({
      email    : userName,
      password : userPassword
    }, function(error, authData) {
      if (error) {

        // Show login error
        $ionicPopup.show({
          title: "Login Error",
          template: error,
          buttons: [{
            text: 'Dismiss',
            type: 'button-default'
          }]
        });

      } else {

        // Login successful, go to home dashboard
        $state.go('home');

      }
    });
  };

});
