// HomePage.js

"use strict";

var PageObject = require(PWD + '/lib/PageObject.js');
var home_page_settings = require("./home_page_settings.js");


class HomePage extends PageObject
{
	constructor(driver, baseUrl) 
	{
		super(driver, baseUrl, home_page_settings);
	}

	get pricing_link()
	{
		this.element(pricing_link);
	}
}

module.exports = HomePage;
