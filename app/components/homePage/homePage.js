(function(){
  'use strict';
  var myApp = angular.module('myApp');
  myApp.controller('HomePageController', ['$scope', homePageController]);

  function homePageController($scope) {
    var vm = this;
    vm.welcomeMessage = "Hello, world!";
  }
})();
