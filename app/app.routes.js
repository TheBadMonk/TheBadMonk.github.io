(function(){
  'use strict';
  var app = angular.module('app');
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "/app/components/home/home", controller: "HomeController as vm"})
    .otherwise({templateUrl: "/app/layout/errorPages/error", controller: "ErrorController as vm"});
  }]);
})();
