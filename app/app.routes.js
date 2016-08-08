(function(){
  'use strict';
  var myApp = angular.module('myApp');
  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "/app/components/homePage/homePage", controller: "HomePageController as vm"})
    .otherwise({templateUrl: "/app/layout/errorPages/error", controller: "ErrorController as vm"});
  }]);
})();
