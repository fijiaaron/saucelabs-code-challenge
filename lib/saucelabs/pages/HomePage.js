// HomePage.js

"use strict";

var PageObject = require(PWD + '/lib/PageObject.js');


var home_page_settings = 
{
	path: "/",
	title : "Cross Browser Testing, Selenium Testing, and Mobile Testing | Sauce Labs",
	menu: {
		item: function getMenuItem(text) { return `//a[text() = '${text}']`},
	},
	pricingLink: { xpath: "//a[text() = 'Pricing']" }
};


class HomePage extends PageObject
{
	constructor(driver, baseUrl) 
	{
		super(driver, baseUrl, home_page_settings);
	}

	get pricing_link()
	{
		return this.element(pricing_link);
	}
}

module.exports = HomePage;
