'use strict';

// should return questions
angular.module('pollApp')
    .service('pollApi', ['$resource', function ($resource) {
          // var Poll = $resource('http://localhost:8000/api/questions/', {}, { query: { isArray: true }
          // });
          // Poll.query();
    return $resource('http://localhost:8000/api/questions/:id/', {}, {
      query: {method:'GET', params:{id:'@id'}, isArray:true}
    });
         
      //   var Poll = $resource('http://localhost:8000/api/questions/:id/', {
      //     id: '@id'
      //   }, {
      //   query: {
      //    isArray:true
      //  }

      // });
      // this.pollList = function () {
      //   // return Poll.query();
      //   return alert("hello");
      // };

}]);
