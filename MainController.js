(function() {

  var app = angular.module("githubViewer");   // get githubViewer module

  var MainController = function($scope, $interval, $location) {

    // Search for a user on Github - the router will direct to
    // "/user/username"
    $scope.search = function(username){
      $location.path("/user/" + username);
    };
    
    $scope.username = "angular";    // default username
  };

  app.controller("MainController", MainController);   // Register controller


}());