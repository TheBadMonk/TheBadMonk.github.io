(function(){
  'use strict';
  var app = angular.module('app');

  app.controller('MainContentPaneController', [mainContentPaneController]);
  function mainContentPaneController($scope, $element, $attrs) {
    var vm = this;

  }

  app.component('mainContentPane', {
    templateUrl: 'app/features/siteContainer/components/mainContentPane/mainContentPane.template.html',
    controller: 'MainContentPaneController'
  });
})();
