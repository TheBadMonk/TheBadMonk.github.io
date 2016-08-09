(function(){
  'use strict';
  var app = angular.module('app');
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "/app/components/homeContent/homeContent.html", controller: "HomeContentController as vm"})
    .otherwise({templateUrl: "/app/layout/errorPages/error.html", controller: "ErrorController as vm"});
  }]);

  //need to do this to load initial route
  app.run(['$route', function($route) {
  $route.reload();
  }]);
})();
