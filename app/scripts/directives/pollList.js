'use strict';

angular.module('pollApp')
    .directive('pollList', ['pollApi', 
      function (pollApi) {
      return {
          scope: {},
          templateUrl: 'views/poll_list.html',
          restrict: 'E',
          link: function postPoll(scope) {
            scope.pollList = pollApi.query();
          }
      };
    }]);