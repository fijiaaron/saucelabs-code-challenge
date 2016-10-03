// SauceLabsDriver.js

"use strict";

var PageObject = require("../PageObject.js");

var home_page_settings = require("./pages/home_page_settings.js");
var pricing_page_settings = require("./pages/pricing_page_settings.js");

class SauceLabsDriver
{
	constructor(driver, baseUrl)
	{
		this.url = baseUrl;
		this.homePage = new PageObject(driver, baseUrl, home_page_settings);
		this.pricingPage = new PageObject(driver, baseUrl, pricing_page_settings);
	}
}

module.exports = SauceLabsDriver;
