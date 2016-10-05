# saucelabs-code-challenge

use *npm* to install dependencies and run cucumber tests

```
npm install 

npm test
```

edit settings.js to specify browser whether to use Sauce Labs or a Selenium standalone server

set environment variables for Sauce Labs username and accesskey
SAUCELABS_USER_NAME=$mysername SAUCELABS_ACCESS_KEY=$myaccesskey npm test

you can run individual suites independently by specifying the tag:

```
npm test -- --tags @PricingPlan

npm test -- --tags @GuineaPig
```
