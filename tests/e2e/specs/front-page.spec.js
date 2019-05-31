const { until, By } = require('selenium-webdriver');
const { Given, When, Then } = require("cucumber");
const { expect } = require('chai');

Given('I am on the front page', function () {
  return this.driver.get(this.testingRootUrl);
});

When('page loading is finished', function() {
  return this.elementExists('#root-element');
});

Then('I can see a login form', function(done) {
  this.elementExists('.login-form').then((isFound) => {
    expect(isFound).to.eql(true);
    done();
  }).catch((err) => { done(new Error(err)); });
});
