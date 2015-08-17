'use strict';

/**
 * @ngdoc directive
 * @name pollApp.directive:questionSubmit
 * @description
 * # questionSubmit
 */

angular.module('pollApp')
  .directive('questionSubmit', function ( QuestionList, ChoiceList, PollUsers) {
    return {
      scope: {},
      templateUrl: 'views/question_submit.html',
      restrict: 'E',
      link: function postLink(scope) {

        scope.question = new QuestionList.QuestionData();
        scope.choice = new ChoiceList.ChoiceData();
        scope.choice2 = new ChoiceList.ChoiceData();
        scope.choice3 = new ChoiceList.ChoiceData();

        scope.user = PollUsers.current;
        scope.user.$promise.then(function(){
          scope.question.user = scope.user.id;
        });



        scope.questionSubmit = function(){

          var d = new Date();

          var time = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay()+"T00:"+d.getSeconds();

          scope.question.pub_date = time;

          scope.question.$save().then(function(){

          var choiceArray = [scope.choice, scope.choice2, scope.choice3]; 

          for (var i=0; i < choiceArray.length; i++){
            console.log(choiceArray[0], "for loop start");
            choiceArray[i].question = scope.question.id;
            console.log(choiceArray[0], "after assinged id");
            choiceArray[i].$save();
            console.log(choiceArray[0], "after save");
            choiceArray[i] = '';
            console.log(choiceArray[0], "after form reset");
          }

          }, function(){

            console.log("noooo failure");

          });

        };
      }
    };
  });
