# bdd-workshop
BDD Workshop artefacts

## Setup
To be able to run examples, you need to have NodeJS 10 (or newer) installed on
your machine.

To install all dependencies, please run this command in your shell or command
prompt:
```
npm install
```

## Unit tests
Unit tests are implemented using [JasmineJS](https://jasmine.github.io/)
framework. For running unit tests, please use this command:
```
npm run test:unit
```
Unit tests coverage reporting is configured using ```nyc``` npm package, please
use this command to get html and lcov reports in ```build/coverage``` folder:
```
npm run test:unit-coverage
```

## E2E (BDD) tests

To get BDD tests working, webpack dev server should be up and running. It is
done by this command:
```
npm start
```

BDD tests are implemented using
[Cucumber](https://cucumber.io/docs/installation/javascript/) framework and
assertion library used to validate testing paths is
[Chai](https://www.chaijs.com/).

By default BDD tests are running in Firefox browser, and default command for
running the tests is:
```
npm run test:e2e
```
If you don't have Firefox browser but your machine has Chrome, you can run BDD
tests by this command:
```
npm run test:e2e-chrome
```

## Build
Package building is done with command:
```
npm run build
```
with results stored in ```dist``` folder that can be hosted on the server.

### Notes
BDD tests can be so called "dummy passed" on purpose during BDD workshop
sessions. Because of this you can find Cucumber tests passing just with
```done``` callback triggering. All BDD workshop participants can contribute to
these tests implementation through collaborative discussions and PRs.
