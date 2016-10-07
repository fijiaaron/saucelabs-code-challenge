// SauceLabsDriver.js

"use strict";

var HomePage = require("./pages/HomePage.js");
var PricingPage = require("./pages/PricingPage.js");
var GuineaPigPage = require("./pages/GuineaPigPage.js");
var GuineaPig2Page = require("./pages/GuineaPig2Page.js");


class SauceLabsDriver
{
	constructor(driver, baseUrl)
	{
		this.init(driver, baseUrl);
	}

	init(driver, baseUrl)
	{
		this.driver = driver;
		this.baseUrl = baseUrl;

		this.homePage = new HomePage(driver, baseUrl);
		this.pricingPage = new PricingPage(driver, baseUrl);
		this.guineaPigPage = new GuineaPigPage(driver, baseUrl);
		this.guineaPig2Page = new GuineaPig2Page(driver, baseUrl);

		this.pages = 
		{
			"Home" : this.homePage,
			"Pricing" : this.pricingPage,
			"Guinea Pig" : this.guineaPigPage,
			"Guinea Pig 2" : this.guineaPig2Page
		};
		
		return this;
	}

	getPage(pageName)
	{
		if (pageName in this.pages)
		{
			return this.pages[pageName];
		}
		else 
		{
			throw Error("page name not recognized: " + pageName);
		}
	}

	open(pageName)
	{
		return this.getPage(pageName).open();
	}
}

module.exports = SauceLabsDriver;
