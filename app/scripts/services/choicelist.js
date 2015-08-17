'use strict';

/**
 * @ngdoc service
 * @name pollApp.ChoiceList
 * @description
 * # ChoiceList
 * Service in the pollApp.
 */
angular.module('pollApp')
  .service('ChoiceList', function ( QuestionList, $resource) {
      var ChoiceData = $resource('http://localhost:8000/api/choices/:id/', {
          id: '@id'
        }, {
        'update': { method: 'PUT'},
        query: {
         isArray: true
       }
      });

      this.ChoiceData = ChoiceData;
      this.choicesList = function () {
        return ChoiceData.query();
      };
  });
