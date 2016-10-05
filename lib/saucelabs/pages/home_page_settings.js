// home_page_settings.js

"use strict";


var home_page_settings = 
{
	path: "/",
	title : "Cross Browser Testing, Selenium Testing, and Mobile Testing | Sauce Labs",
	menu: {
		item: function getMenuItem(text) { return `//a[text() = '${text}']`},
	},
	pricingLink: { xpath: "//a[text() = 'Pricing']" }
};

module.exports = home_page_settings;
