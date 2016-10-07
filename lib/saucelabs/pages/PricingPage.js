// PricingPage.js

"use strict";

var PageObject = require(PWD + '/lib/PageObject.js');


var pricing_page_settings =
{
	path: "/pricing",
	title: "Pricing | Sauce Labs",

	annual_pricing_button: { xpath: `//button[contains(text(), "Annual Pricing")]` },
	monthly_pricing_button:  { xpath: `//button[contains(text(), "Monthly Pricing")]` },

	plan_locator: function plan_locator(plan_name)
	{
		return { xpath: `//article//*[contains(text(), "${plan_name}")]` };
	},

	price_for_plan: function price_for_plan(plan_name)
	{
		return { xpath: `//article//*[contains(text(), "${plan_name}")]/../div[2]//span[2]` };
	}
};


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
