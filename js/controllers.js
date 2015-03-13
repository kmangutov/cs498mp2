
var movieApp = angular.module("movieApp", ['ngRoute']);

movieApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/list', {
      templateUrl: './partials/list.html',
      controller: 'ListController'
    })
    .when('/details/:id', {
      templateUrl: './partials/details.html',
      controller: 'DetailsController'
    })
    .otherwise({
      redirectTo: '/list'
    });

}]);

movieApp.controller('DetailsController', ['$scope', '$http', '$routeParams', 
  function($scope, $http, $routeParams) {

    $scope.movie = {};
    $scope.id = $routeParams.id;
    $scope.movies_length = 0;

    $http.get('./data/imdb250.json').success(function(data) {

      $scope.movie = data[$routeParams.id];
      $scope.movies_length = data.length;
    });


    $scope.go = function(id) {

      console.log("go to " + id);
      $location.path("/details/" + id);
    } 

    $scope.id_delta = function(delta) {

      $location.path("/details/" + (id + delta));
    }

  }]);

movieApp.controller('ListController', ['$scope', '$http', '$location', 
  function($scope, $http, $location) {

    $scope.movies = [];

    $http.get('./data/imdb250.json').success(function(data) {

      for(var i = 0; i < data.length; i++)
        data[i].id = i;

      $scope.movies = data;
    });

    $scope.sort = {
        column: 'rank',
        descending: false
    };    

    $scope.go = function(id) {

      console.log("go to " + id);
      $location.path("/details/" + id);
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