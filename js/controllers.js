var beerControllers = angular.module('beerControllers', ['ngAnimate']);

beerControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/beerdata.json').success(function(data) {
    $scope.beer = data;
    $scope.beerOrder = 'name';
  });
}]);

beerControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/beerdata.json').success(function(data) {
    $scope.beer = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.beer.length-1;
    }

    if ($routeParams.itemId < $scope.beer.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

