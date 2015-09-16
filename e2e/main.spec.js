'use strict';

describe('The main view', function () {

  beforeEach(function () {
    browser.driver.get('http://localhost:5555');
    return browser.ignoreSynchronization = true;
  });

  it('should include jumbotron with correct data', function() {
    expect(browser.driver.findElement(by.css('.jumbotron')).getText()).toContain('Howdy!');
  });

});
