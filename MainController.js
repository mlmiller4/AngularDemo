(function() {

  var app = angular.module("githubViewer");   // get githubViewer module

  var MainController = function($scope, $interval, $location) {

    // Search for a user on Github - if countdown timer reaches 0,
    // use the default user 'angular'
    $scope.search = function(username){
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };
    
    // Decrement the countdown timer
    var decrementCountdown = function(){
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    
    // Decrement the countdown timer every 1 second
    var countdownInterval = null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    
    $scope.username = "angular";    // default username
    $scope.countdown = 5;     // Countdown timer of 5 seconds
    startCountdown();
  };

  app.controller("MainController", MainController);   // Register controller


}());