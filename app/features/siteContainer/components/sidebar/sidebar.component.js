(function(){
  'use strict';
  var app = angular.module('app');

  app.controller('SidebarController', [sidebarController]);
  function sidebarController($scope, $element, $attrs) {
    var vm = this;

  }

  app.component('sidebar', {
    templateUrl: 'app/features/siteContainer/components/sidebar/sidebar.template.html',
    controller: 'SidebarController'
  });
})();
