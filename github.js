// A module using the Revealing Module Pattern to access Github user
// info using Github's API
(function(){
  
  // Service to get user info and a list of that user's repos from Github
  var github = function($http){
    
    var getUser = function(username){
      return $http.get("https://api.github.com/users/" + username)
                  .then(function(response){
                    return response.data;
                  });
    };
    
    var getRepos = function(user){
      return $http.get(user.repos_url)
                  .then(function(response){
                      return response.data;
                  });
    };
    
    var getRepoDetails = function(username, reponame){
      var repo;
      var repoUrl = "https://api.github.com/repos/" + username 
                    + "/" + reponame;
                    
      return $http.get(repoUrl)
                  .then(function(response){
                    repo = response.data;
                    return $http.get(repoUrl + "/stargazers");
                  })
                  .then(function(response){
                    repo.stargazers = response.data;
                    return repo;
                  });
      
    };
    
    return{
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };
  };
  
  var module = angular.module("githubViewer");  // get reference to module
  module.factory("github", github);   // Register the github service with Angular
 
  
}());