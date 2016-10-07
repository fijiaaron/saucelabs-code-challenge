# saucelabs-code-challenge

use *npm* to install dependencies and run cucumber tests

```
npm install 

npm test
```


you can run individual suites independently by specifying the tag:

```
npm test -- --tags @PricingPlan

npm test -- --tags @GuineaPig
```



edit settings.js to specify browser whether to use Sauce Labs or a Selenium standalone server

set environment variables for Sauce Labs username and accesskey

```
SAUCELABS_USER_NAME=$mysername SAUCELABS_ACCESS_KEY=$myaccesskey npm test
```

to run tests using a local webdriver, first start selenium server

```
npm run selenium-server
```

to run tests in parallel:

```
npm run tests-parallel
```

It will run scenarios in multiple browser windows at the same time. 
