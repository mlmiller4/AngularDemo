(function(){
  
    // Get githubViewer module with ngRoute dependancy
    var app = angular.module("githubViewer", ["ngRoute"]);
    
    // Configure routes for "main", "/user/username", and "/repos/username/reponame"
    app.config(function($routeProvider){
      $routeProvider
          .when("/main", {
            templateUrl: "main.html",
            controller: "MainController"
          })
          .when("/user/:username", {
            templateUrl: "user.html",
            controller: "UserController"
          })
          .when("/repos/:username/:reponame", {
            templateUrl: "repo.html",
            controller: "RepoController"
          })
          .otherwise({redirectTo:"/main"});
    })
  
}());