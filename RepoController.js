(function(){
  
  var module = angular.module("githubViewer");    // Get githubViewer module
  
  var RepoController = function($scope, $routeParams, github){
    
    // Set repo details to $scope.repo
    var onRepo = function(data){
      $scope.repo = data;
    };
    
    var onError = function(reason){
      $scope.error = reason;
    };
    
    // Get reponame and username from route parameters
    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    
    // Get details for a specific user and repo
    github.getRepoDetails(username, reponame)
        .then(onRepo, onError);
  };
  
  module.controller("RepoController", RepoController);  // Register controller
  
  
}());