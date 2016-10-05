// PricingPage.js

"use strict";

var PageObject = require(PWD + '/lib/PageObject.js');
var pricing_page_settings = require('./pricing_page_settings.js');


class PricingPage extends PageObject
{
	constructor(driver, baseUrl)
	{
		super(driver, baseUrl, pricing_page_settings);
	}

	getPriceForPlan(plan)
	{
		var price_locator = this.price_for_plan(plan);

		return this.element(price_locator).getText(price_locator);
	}
}

module.exports = PricingPage;
