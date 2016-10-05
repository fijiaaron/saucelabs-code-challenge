// world.js

"use strict";

var webdriver = require('selenium-webdriver');

var WebDriverBuilder = require(PWD + "/lib/WebDriverBuilder.js");
var SauceLabsDriver = require(PWD + "/lib/saucelabs/SauceLabsDriver.js");
var GuineaPig = require(PWD + "/lib/saucelabs/GuineaPig.js");


function CustomWorld()
{
	this.webdriver = webdriver;
	this.by = webdriver.By;
	this.until = webdriver.until;

	this.driver = WebDriverBuilder.build_from_settings(settings);

	this.sauce = new SauceLabsDriver(this.driver, settings.saucelabs.baseUrl);
	this.cuy = new GuineaPig(this.driver, settings.saucelabs.baseUrl);
};

module.exports = function() { this.World = CustomWorld; }
