(function(){
  'use strict';
  var myApp = angular.module('myApp');
  myApp.controller('ErrorController', ['$scope', errorController]);

  function errorController($scope) {
    var vm = this;
    vm.errorMessage = "Cannot find this page";
  }
})();
