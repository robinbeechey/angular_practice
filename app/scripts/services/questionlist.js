'use strict';

// should return questions
angular.module('pollApp')
    .service('QuestionList', function ($resource) {  

      var QuestionData = $resource('http://localhost:8000/api/questions/:id/', {
          id: '@id'
        }, {
        query: {
         isArray:true
       }
      });

      this.QuestionData = QuestionData;

      this.questionsList = function () {
        return QuestionData.query();
      };

});
