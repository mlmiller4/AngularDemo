(function() {

  var app = angular.module("githubViewer");   //get githubViewer module

  var UserController = function($scope, github, $routeParams) {

    // After finding a Github user, get a list of  their repos
    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    // Add list of a user's repos to $scope.repos
    var onRepos = function(data){
      $scope.repos = data;
    };

    // Display error message
    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

    $scope.username = $routeParams.username        // Default username
    $scope.repoSortOrder = "-stargazers_count";   // Default sorting: descending by number of stars
    
    // Get user info by username
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", UserController);   // Register controller


}());