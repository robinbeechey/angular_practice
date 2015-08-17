'use strict';

/**
 * @ngdoc directive
 * @name pollApp.directive:userProfile
 * @description
 * # userProfile
 */
angular.module('pollApp')
  .directive('userProfile', function (PollUsers) {
    return {
      scope: {},
      templateUrl: 'views/user_profile.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.edit = false;
        scope.user = PollUsers.current;
        scope.updateUser = function () {
          scope.user.$update();
        };
        scope.reset = function() {
        };
      }
    };
  });
