'use strict';

/**
 * @ngdoc directive
 * @name pollApp.directive:pollNavbar
 * @description
 * # pollNavbar
 */
angular.module('pollApp')
  .directive('pollNavbar', function (AuthToken, PollUsers) {
    return {
      scope: {},
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.auth = AuthToken;
        scope.user = PollUsers.current;
      }
    };
  });
