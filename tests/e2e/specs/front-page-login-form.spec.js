const { until, By } = require('selenium-webdriver');
const { Given, When, Then } = require("cucumber");
const { expect } = require('chai');

When('I entered a non-email text value into username field', function (done) {
  this.driver.findElement(By.css('[name="login-username"]'))
    .then((el) => {
      el.sendKeys('testuser').then((res) => {
        el.getAttribute('value').then((val) => {
          expect(val).to.eql('testuser');
          done();
        });
      });
    });
});

When('I entered an email text value into username field', function (done) {
  this.driver.findElement(By.css('[name="login-username"]'))
    .then((el) => {
      el.sendKeys('testuser@example.com').then((res) => {
        el.getAttribute('value').then((val) => {
          expect(val).to.eql('testuser@example.com');
          done();
        });
      });
    });
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

Then('in login form there are username and password fields', async function () {
  const formUsername = await this.elementExists(
    '.login-form [name="login-username"]'
  );
  const formPassword = await this.elementExists(
    '.login-form [name="login-username"]'
  );
  return new Promise((resolve, reject) => {
    if (formUsername && formPassword) {
      resolve();
    } else {
      reject();
    }
  });
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
