(function(){ //self invoking anonymous function to make sure code runs
  'use strict'; //strict mode disallows certain bullshit coding shortcuts that can break code
  var app = angular.module('app', ['ui.router']); //declaring your angular app here. THe array in the second argument is a list of dependencies (e.g. angular or vendor libraries)
//angular.module('myApp', [list, of, dependencies]) DECLARES a new module. angular.module('myApp') FETCHES the module named myApp.
})();
