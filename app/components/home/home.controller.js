(function(){
  'use strict';
  var app = angular.module('app');
  app.controller('HomeController', ['$scope', homeController]);

  function homeController($scope) {
    var vm = this;
    vm.welcomeMessage = "Hello, world!";
  }
})();
