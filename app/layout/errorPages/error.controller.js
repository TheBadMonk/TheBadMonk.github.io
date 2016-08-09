(function(){
  'use strict';
  var app = angular.module('app');
  app.controller('ErrorController', ['$scope', errorController]);

  function errorController($scope) {
    var vm = this;
    vm.errorMessage = "Cannot find this page";
  }
})();
