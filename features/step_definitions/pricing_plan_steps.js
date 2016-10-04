// pricing_plan_steps.js

function pricing_plan_steps()
{
	this.Given(/^I am on the Sauce Labs home page$/, function (callback) {
		driver.open("https://saucelabs.com");
		callback(null, 'pending');
	});

	this.When(/^I choose "([^"]*)" from the menu$/, function (arg1, callback) {
		callback(null, 'pending');
	});

	this.Then(/^I should see the pricing page$/, function (callback) {
		callback(null, 'pending');
	});

	this.Then(/^I should see the (\d+) for my Individual$/, function (arg1, callback) {
		callback(null, 'pending');
	});
}

module.exports = pricing_plan_steps;
