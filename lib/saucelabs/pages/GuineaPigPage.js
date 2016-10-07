//GuineaPig.js

"use strict";

var PageObject = require(PWD + "/lib/PageObject.js");


var guinea_pig_settings = 
{
	path: "/test/guinea-pig",
	title: "I am a page title - Sauce Labs",
	first_checkbox: { id: "unchecked_checkbox" },
	email_address_field: { id: "fbemail" }
};


class GuineaPigPage extends PageObject
{
	constructor(driver, baseUrl, settings)
	{
		super(driver, baseUrl, guinea_pig_settings);
	}

	click_first_checkbox() {
		return this.element(this.first_checkbox).click();
	}

	is_first_checkbox_checked() {
		return this.element(this.first_checkbox).getAttribute("checked");
	}

	enter_email_address(emailAddress)
	{
		return this.element(this.email_address_field).sendKeys(emailAddress);
	}

	get_email_address() 
	{
		return this.element(this.email_address_field).getAttribute("value");
	}
}

module.exports = GuineaPigPage;
