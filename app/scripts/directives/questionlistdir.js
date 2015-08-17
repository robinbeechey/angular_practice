'use strict';

angular.module('pollApp')
    .directive('questionListDir',
      function (QuestionList, ChoiceList, AuthToken, PollUsers) {
      return {
          scope: {},
          templateUrl: 'views/question_list.html',
          restrict: 'E',
          link: function postLink(scope) {
            scope.auth = AuthToken;
            scope.user = PollUsers.current;
            scope.questions = QuestionList.questionsList();
            scope.questionslist = QuestionList.QuestionData;
            scope.choices = ChoiceList.choicesList();
            scope.updateVote = function(choice) {
              console.log(choice);
              choice.votes += 1;
              choice.$update();
            };
          }
      };
    });