// SauceLabsDriver.js

"use strict";

// var PageObject = require("../PageObject.js");
// var home_page_settings = require("./pages/home_page_settings.js");
// var pricing_page_settings = require("./pages/pricing_page_settings.js");

var HomePage = require("./pages/HomePage.js");
var PricingPage = require("./pages/PricingPage.js");

class SauceLabsDriver
{
	constructor(driver, baseUrl)
	{
		this.url = baseUrl;
		this.homePage = new HomePage(driver, baseUrl);
		this.pricingPage = new PricingPage(driver, baseUrl);
	}
}

module.exports = SauceLabsDriver;
