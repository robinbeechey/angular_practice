'use strict';

/**
 * @ngdoc directive
 * @name pollApp.directive:choiceListDir
 * @description
 * # choiceListDir
 */
angular.module('pollApp')
  .directive('choiceListDir', [ 'ChoiceList', function (ChoiceList) {
    return {
      template: 'views/choice_list.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.choices = ChoiceList.choicesList();
      }
    };
  }]);
