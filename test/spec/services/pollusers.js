'use strict';

describe('Service: PollUsers', function () {

  // load the service's module
  beforeEach(module('pollApp'));

  // instantiate service
  var PollUsers;
  beforeEach(inject(function (_PollUsers_) {
    PollUsers = _PollUsers_;
  }));

  it('should do something', function () {
    expect(!!PollUsers).toBe(true);
  });

});
