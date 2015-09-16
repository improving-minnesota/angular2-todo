'use strict';

describe('The main view', function () {

  beforeEach(function () {
    browser.driver.get('http://localhost:5555/todo');
    return browser.ignoreSynchronization = true;
  });

  it('should add a todo', function() {
    browser.driver.findElement(by.id('todo-input')).sendKeys('new todo');
    browser.driver.findElement(by.id('todo-submit')).click();
    browser.driver.findElements(by.css('.list-group-item')).then(function(items) {
    	expect(items.length).toBe(3);
    });
  });

    it('should remove a todo', function() {
  	browser.driver.findElements(by.css('.list-group-item')).then(function(items) {
    	browser.driver.findElement(by.id('todo-remove')).click();
    });
    browser.driver.findElements(by.css('.list-group-item')).then(function(items) {
    	expect(items.length).toBe(1);
    });
  });

});