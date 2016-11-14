(function(){
  'use strict';
  var app = angular.module('app');

  app.controller('InlinePageContainerController', [inlinePageContainerController]);
  function inlinePageContainerController() {
    var vm = this;
    function init() {
      vm.includedPage = $ctrl.includePath ? $ctrl.includePath : "included-page attribute is required, please add one";
      vm.routeName = $ctrl.routeName ? "/#/" + $ctrl.routeName : "route-name attribute is required, please add one";
      if($ctrl.customClasses)
      {
        vm.customClasses = {
          wrapperClass: $ctrl.customClasses.wrapperClass || "",
          maskClass: $ctrl.customClasses.maskClass || "",
          pageClass: $ctrl.customClasses.pageClass || ""
        };
      }
    }
    init();
  }

  app.component('inlinePageContainer', [inlinePageContainerConfig]);
  function inlinePageContainerConfig() {
    return {
      bindings: {
        includePath: '@', //required
        routeName: '@', //required
        customClasses: '=?', //optional
      },
      controller: 'InlinePageContainerController',
      templateUrl: 'app/shared/components/inlinePageContainer/inlinePageContainer.template.html'
    };
  }
})();
