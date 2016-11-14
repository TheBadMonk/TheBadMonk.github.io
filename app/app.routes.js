(function(){
  'use strict';
  var app = angular.module('app'); //this means get the module named 'app'

  app.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'app/features/homeContent/homeContent.container.html'
          });
  });
})();
