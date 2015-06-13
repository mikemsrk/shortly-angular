angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  // Your code here
  if($location.$$search.code){

    // Redirect
    Links.getLinks($location.$$search.code).then(function(resp){
      window.location.href = resp.data;
    });
  }

  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks().then(function(resp){
      $scope.data.links = resp.data;
    });
  };
  $scope.getLinks();

});
