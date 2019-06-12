const { until, By } = require('selenium-webdriver');
const { Given, When, Then } = require("cucumber");
const { expect } = require('chai');

Given('I am on the registration page', function () {
  return this.driver.get(`${this.testingRootUrl}/register.html`);
});

Given('I click on {string} field', function(fieldName, done) {
  done();
});

When('page load has finished', function (done) {
  done();
});

When(
  'I leave {string} field after entered {string}',
  function (fieldName, value, done) {
    const that = this;
    this.driver
      .findElement(By.css(fieldName))
      .then((el) => {
        el.sendKeys(value).then((res) => {
          el.getAttribute('value').then((val) => {
            expect(val).to.eql(value);
            that.driver.executeScript(
              `
              document.querySelector("${fieldName}")
              .dispatchEvent(new Event('blur'));
              `
            ).then(() => {
              done();
            }).catch((err) => { done(new Error(err)); });
          }).catch((err) => { done(new Error(err)); });
        });
      }).catch((err) => { done(new Error(err)); });
  }
);

Then('registration form appears on the page', function () {
  return this.driver.findElement(By.css('.registration-form'));
});

Then(
  '{string} field indicates {string}',
  function (fieldName, status, done) {
    this.driver.findElement(By.css(fieldName)).then((el) => {
      el.getAttribute('class').then((cssClassString) => {
        const containsError = cssClassString.indexOf(status) > -1;
        expect(containsError).to.eql(true);
        this.saveScreenshot().then(() => {
          done();
        }).catch(err => { done(new Error(err)); });
        done();
      }).catch((err) => { done(new Error(err)); });
    });
  }
);
