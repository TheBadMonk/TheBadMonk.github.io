(function(){
  'use strict';
  var app = angular.module('app');

  app.controller('SiteContainerController', [siteContainerController]);
  function siteContainerController() {
    var vm = this;
  }

  app.component('siteContainer', {
    templateUrl: 'app/features/siteContainer/siteContainer.container.html',
    controller: 'SiteContainerController'
  });
})();
