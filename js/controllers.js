
var movieApp = angular.module("movieApp", ['ngRoute']);

movieApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/list', {
      templateUrl: './partials/list.html',
      controller: 'ListController'
    })
    .otherwise({
      redirectTo: '/list'
    });

}]);

movieApp.controller('ListController', ['$scope', '$http', 
  function($scope, $http) {

    $scope.movies = [];

    $http.get('./data/imdb250.json').success(function(data) {

      $scope.movies = data;
    });

    $scope.sort = {
        column: 'rank',
        descending: false
    };    

    $scope.go = function(rank) {

      console.log("go to " + rank);
    } 

    $scope.changeSorting = function(column) {

        var sort = $scope.sort;

        if (sort.column == column) 
            sort.descending = !sort.descending;
        else {
            sort.column = column;
            sort.descending = false;
        }
    };

  }]);