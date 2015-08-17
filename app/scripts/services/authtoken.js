'use strict';

/**
 * @ngdoc service
 * @name pollApp.AuthToken
 * @description
 * # AuthToken
 * Service in the pollApp.
 */
angular.module('pollApp')
  .service('AuthToken', function ($resource, $cookies, $http, $location, $window) {
      var self = this;
      var authkey = 'token';
      this.authority = false;
      this.login = function (username, password) {
        $http.post('http://localhost:8000/api-token-auth/', {'username': username, 'password': password}).then(function (request) {
          self.authority = true;
          $cookies.put(authkey, request.data.token);
          $http.defaults.headers.common.Authorization = 'JWT ' + $cookies.get(authkey);
          $location.path('/questions');
        }, function (request) {
          if (request.data.non_field_errors) {
              for (var i = 0; i < request.data.non_field_errors.length; i++) {
                      console.log("failed");
                    }
          }
        });
      };


      this.logout = function () {
        self.authority = false;
        $cookies.remove(authkey);
        delete $http.defaults.headers.common.Authorization;
        $location.path('/');
        // $window.location.reload();
      };

      this.loadAuth = function () {
          if (typeof $cookies.get(authkey) !== 'undefined') {
            self.authority = true;
              $http.defaults.headers.common.Authorization = 'JWT ' + $cookies.get(authkey);
          }
      };
      
  });
