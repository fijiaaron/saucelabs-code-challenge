// world.js

"use strict";

var webdriver = require('selenium-webdriver');

var PWD = process.env.PWD;
var SauceLabsDriver = require(PWD + "/lib/saucelabs/SauceLabsDriver.js");
var settings = require(PWD + "/settings.js");

console.log(settings);


var driver = new webdriver.Builder()
	.usingServer(settings.selenium.remote.url)
	.withCapabilities(settings.selenium.capabilities)
	.build();

function CustomWorld()
{
	this.settings = settings;
	this.webdriver = webdriver;
	this.by = webdriver.By;
	this.until = webdriver.until;

	this.driver = driver
	this.sauce = new SauceLabsDriver(this.driver, "https://www.saucelabs.com");
};

// module.exports.World = CustomWorld;

module.exports = function() { this.World = CustomWorld; }
