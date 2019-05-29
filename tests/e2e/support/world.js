const fs = require('fs');
const path = require('path');
const process = require('process');
const {
  setDefaultTimeout,
  setWorldConstructor,
  After
} = require("cucumber");
const seleniumDriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const chrome = require('selenium-webdriver/chrome');
// Load browser drivers for Linux & MacOS
require('chromedriver');
require('geckodriver');

function CustomWorld() {

  const projectRoot = path.resolve(__dirname, './../../..');
  const screenshotsDirectory = `${projectRoot}/build/screenshots`;

  const getBrowser = () => (process.env.BDD_BROWSER === 'chrome' ?
    new seleniumDriver.Builder()
      .withCapabilities({ "acceptInsecureCerts": true })
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build()
    :
    new seleniumDriver.Builder()
      .withCapabilities({ "acceptInsecureCerts": true })
      .forBrowser('firefox')
      .setFirefoxOptions(new firefox.Options().headless())
      .build()
  );

  this.driver = getBrowser();
  this.testingRootUrl = 'http://localhost:8080';
  this.variable = 0;

  this.setTo = (number) => {
    this.variable = number;
  }

  this.incrementBy = (number) => {
    this.variable += number;
  }

  /**
   * @param {String} cssSelector CSS Selector for element to be found.
   * @return {Boolean} Returns boolean true if element exists, false otherwise.
   */
  this.elementExists = function elementExists (cssSelector) {
    return this.driver
      .findElement(seleniumDriver.By.css(cssSelector))
      .then(
        function () {
          return true;
        },
        function (err) {
          if (err instanceof seleniumDriver.error.NoSuchElementError) {
            return false;
          } else {
            Promise.reject(err);
          }
        }
      );
  };

  this.saveScreenshot = function saveScreenshot() {

    const mmtime = Date.now();
    return new Promise((confirm, reject) => {
      this.driver.takeScreenshot().then((content) => {
        const fimg = path.resolve(screenshotsDirectory, `./screenshot-${mmtime}.png`);
        fs.writeFile(
          path.resolve(fimg),
          content,
          'base64',
          () => (confirm())
        )
      }, (err) => (reject(err)));
    });
  };
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(10 * 1000);

After(function () {
  return this.driver.quit();
});