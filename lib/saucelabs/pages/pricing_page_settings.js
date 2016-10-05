// pricing_page_settings.js

"use strict";

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

module.exports = pricing_page_settings;
