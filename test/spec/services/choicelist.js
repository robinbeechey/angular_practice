'use strict';

describe('Service: ChoiceList', function () {

  // load the service's module
  beforeEach(module('pollApp'));

  // instantiate service
  var ChoiceList;
  beforeEach(inject(function (_ChoiceList_) {
    ChoiceList = _ChoiceList_;
  }));

  it('should do something', function () {
    expect(!!ChoiceList).toBe(true);
  });

});
