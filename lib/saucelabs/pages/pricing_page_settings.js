// pricing_page_settings.js

var pricing_page_settings = {
	path: "/pricing",
	title: "Pricing | Sauce Labs",

	annual_pricing_button: { xpath: `//button[contains(text(), "Annual Pricing")]` },
	monthly_pricing_button:  { xpath: `//button[contains(text(), "Monthly Pricing")]` },

	plan: function get_plan_locator(plan_name) {
		return { xpath: `//article//*[contains(text(), "${plan_name}")]` };
	},

	price_for_plan: function get_price_locator(plan_name) {
		return { xpath: `//article//*[contains(text(), "${plan_name}")]/../div[2]` };
	}
};

module.exports = pricing_page_settings;
