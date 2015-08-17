'use strict';

describe('Directive: choiceListDir', function () {

  // load the directive's module
  beforeEach(module('pollApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<choice-list-dir></choice-list-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the choiceListDir directive');
  }));
});
