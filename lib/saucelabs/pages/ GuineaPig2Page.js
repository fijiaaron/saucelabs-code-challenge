//GuineaPig2Page.js

"use strict";

var PageObject = require(PWD + "/lib/PageObject.js");


var guinea_pig2_settings =
{
	path: "/test-guinea-pig2.html",
	title: "I am another page title - Sauce Labs",
	content: "I am some other page content",
	div: { id: "i_am_an_id" }
};


class GuineaPig2Page extends PageObject
{ 
	constructor(driver, baseUrl)
	{
		super(driver, baseUrl, guinea_pig2_settings);
	}
}

module.exports = GuineaPig2Page;
