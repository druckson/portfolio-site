(function(data) {
    var app = angular.module("Portfolio", ["ngRoute"]);

    app.config(function($routeProvider) {
        //console.log($routeProvider);
        $routeProvider.when('/', {
            templateUrl: "/partials/experience.html",
            controller: "PortfolioController"
        });

        _.each(["skills", "experience", "education", "projects", "certifications"], function(page) {
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

    app.controller("PortfolioController", function($scope, $http) {
        var data = JSON.parse(Sizzle("#data")[0].innerHTML);
        for (k in data) {
            $scope[k] = data[k];
        }
    });
})();
