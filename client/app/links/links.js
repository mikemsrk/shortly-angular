angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    // Links.getLinks().then(function(resp){
    //   $scope.data.links = resp.data;
    // });
    Links.getLinks().then(function(resp){
      $scope.data.links = resp.data;
    });
  };
  $scope.getLinks();

});
