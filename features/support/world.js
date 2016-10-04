// world.js

var PWD = process.env.PWD;
var WebDriverBuilder = require(PWD + "/lib/WebDriverBuilder.js");
var settings = require(PWD + "/settings.js");
console.log(settings);

var browser = process.env.SELENIUM_BROWSER || settings.selenium.browser;

var driver = 