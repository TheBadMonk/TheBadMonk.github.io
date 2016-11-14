(function(){
  'use strict';
  var app = angular.module('app');
  app.directive('clickOutside',['$document', clickOutside]);
  function clickOutside($document){
    return {
      restrict: 'A',
      scope: {
        clickOutside: '&'
      },
      link: function (scope, el, attr) {
        $document.on('click', function (e) {
          if (el !== e.target && !el[0].contains(e.target)) {
            scope.$apply(function () {
              scope.clickOutside();
            });
          }
        });
      }
    }
  }
})();
