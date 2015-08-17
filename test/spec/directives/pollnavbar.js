'use strict';

describe('Directive: pollNavbar', function () {

  // load the directive's module
  beforeEach(module('pollApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poll-navbar></poll-navbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pollNavbar directive');
  }));
});
