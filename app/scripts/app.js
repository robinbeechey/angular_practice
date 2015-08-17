'use strict';

/**
 * @ngdoc overview
 * @name pollApp
 * @description
 * # pollApp
 *
 * Main module of the application.
 */
angular
  .module('pollApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        auth: true,
      })
      .when('/questions', {
        templateUrl: 'views/questions.html',
        auth: false,
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        auth: false,
      })
      .otherwise({
        redirectTo: '/',
        auth: false,
      });
  }).run(function ($rootScope, AuthToken, $location) {
    AuthToken.loadAuth();
    $rootScope.$on('$routeChangeStart', function (a, n) {
      if (n) {
        if (n.auth === false && AuthToken.authed) {
          $location.path('/questions');
        } else if (n.auth === true && !AuthToken.authed) {
          $location.path('/');
        }
      }
    });
  });
