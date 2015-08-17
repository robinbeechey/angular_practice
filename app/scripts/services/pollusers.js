'use strict';

/**
 * @ngdoc service
 * @name pollApp.PollUsers
 * @description
 * # PollUsers
 * Service in the pollApp.
 */

angular.module('pollApp')
  .service('PollUsers', function ($resource, $location) {
      var User = $resource('http://localhost:8000/api/users/:id/:list_route/', {
        id: '@id'
      }, {
        'update': { method: 'PUT'},
        current_user: {
          params: {
            list_route: 'current_user'
          },
        }
      });     

      this.profile = function(){
        $location.path('/profile');
      };

      this.current = User.current_user();
      this.User = User;

  });
