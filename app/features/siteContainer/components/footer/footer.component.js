(function(){
  'use strict';
  var app = angular.module('app');

  app.controller('FooterController', [footerController]);
  function footerController($scope, $element, $attrs) {
    var vm = this;

  }

  app.component('footer', {
    templateUrl: 'app/features/siteContainer/components/footer/footer.template.html',
    controller: 'FooterController'
  });
})();
