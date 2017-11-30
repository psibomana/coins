'use strict';

angular.module('myApp.coins', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coins', {
    templateUrl: 'coins/coins.html',
    controller: 'CoinsCtrl'
  });
}])
.controller('CoinsCtrl', [function() {

}])
.directive('restrictTo', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        var re = RegExp(attrs.restrictTo);
        var exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right/;

        element[0].addEventListener('keydown', function(event) {
            var v=element[0].value + event.key;
            if (!exclude.test(event.key) && !re.test(v)) {
                event.preventDefault();
            }
        });
    }
  }
});