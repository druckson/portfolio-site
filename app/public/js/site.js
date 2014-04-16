(function(data) {
    var app = angular.module("Portfolio", ["ngRoute"]);

    app.config(function($routeProvider) {
        //console.log($routeProvider);
        $routeProvider.when('/', {
            templateUrl: "main.html",
            controller: "PortfolioController"
        });
    });

    app.controller("PortfolioController", function($scope, $http) {
        $http({method: "GET", url: "/data.json"})
            .success(function(data, status, headers, config) {
                console.log(data);
                for (k in data) {
                    $scope[k] = data[k];
                }
            });
    });
})();
