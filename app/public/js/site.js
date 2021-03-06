(function(data) {
    var app = angular.module("Portfolio", ["ngRoute", "angulartics", "angulartics.google.analytics"]);

    var routes = ["skills", "experience", "education", "projects", "certifications"];

    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "/partials/experience.html",
            controller: "PortfolioController"
        });

        _.each(routes, function(page) {
            $routeProvider.when('/' + page + '/', {
                templateUrl: "/partials/" + page + ".html",
                controller: "PortfolioController"
            });
        });
    });

    app.config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            "self",
            "http://www.openprocessing.org/sketch/*/embed/**"
        ]);
    });

    app.directive('processing', function($http) {
        return function(scope, iElement, iAttr) {
            $http({method: "GET", url: iAttr.processing}).success(function(data) {
                scope.$processing = new Processing(iElement[0], Processing.compile(data));
            });
        };
    });


    app.controller("PortfolioController", function($scope, $http, $location) {
        var data = JSON.parse(Sizzle("#data")[0].innerHTML);
        for (k in data) {
            $scope[k] = data[k];
        }

        $scope.routes = routes;

        $scope.urlForRoute = function(route) {
            return "/#/" + route + "/";
        }

        $scope.activeRoute = function(route) {
            return ("/" + route + "/") === $location.path();
        }
    });
})();
