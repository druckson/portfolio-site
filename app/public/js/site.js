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

    app.directive('processing', function($http) {
        return function(scope, iElement, iAttr) {
            $http({method: "GET", url: iAttr.processing}).success(function(data) {
                console.log("Hello", Processing.compile(data).sourceCode);
                scope.$processing = new Processing(iElement[0], Processing.compile(data));
            });
            
            //scope.$processing = new Processing(iElement[0], scope[iAttr.processing]);
        };
    });


    app.controller("PortfolioController", function($scope, $http) {
        var data = JSON.parse(Sizzle("#data")[0].innerHTML);
        for (k in data) {
            $scope[k] = data[k];
        }
    });
})();
