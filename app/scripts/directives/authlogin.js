'use strict';

/**
 * @ngdoc directive
 * @name pollApp.directive:authLogin
 * @description
 * # authLogin
 */
angular.module('pollApp')
  .directive('authLogin', ['AuthToken',function (AuthToken) {
    return {
      scope: {},
      templateUrl: 'views/login_form.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.username = '';
        scope.password = '';
        scope.auth = AuthToken;
      }
    };
  }]);
