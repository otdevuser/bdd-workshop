const { until, By } = require('selenium-webdriver');
const { Given, When, Then } = require("cucumber");
const { expect } = require('chai');

When('I entered a non-email text value', (done) => {
  done()
});

When('I entered an email text value', (done) => {
  done()
});

When('I left a password field empty', (done) => {
  done()
});

When('I entered a correct password', (done) => {
  done()
});

Then('in login form there are login and register buttons', (done) => {
  done();
});

Then('in login form there is username and password fields', (done) => {
  done();
});

Then('in login form there is forgot password link', (done) => {
  done();
});

Then('username field indicates the error', (done) => {
  done();
});

Then('username field validates as correct', (done) => {
  done();
});

Then('password field indicates the error', (done) => {
  done();
});

Then('password field validates as correct', (done) => {
  done();
});
