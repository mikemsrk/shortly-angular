angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url:''};
  $scope.addLink = function(link){
    console.log(link);
    Links.postLink(link).then(function(resp){
      $scope.link.url = '';
      console.log(resp);
    });
  };
});
