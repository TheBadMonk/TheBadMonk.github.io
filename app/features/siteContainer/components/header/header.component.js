(function(){
  'use strict';
  var app = angular.module('app');

  app.controller('HeaderController', [headerController]);
  function headerController($scope, $element, $attrs) {
    var vm = this;

  }

  app.component('header', {
    templateUrl: 'app/features/siteContainer/components/header/header.template.html',
    controller: 'HeaderController'
  });
})();
