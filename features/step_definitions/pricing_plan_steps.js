// pricing_plan_steps.js

"use strict";

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var expect = chai.expect;
var should = chai.should();

function pricing_plan_steps()
{
	this.Given(/^I am on the Sauce Labs home page$/, function (callback)
	{
		this.sauce.homePage.open();
		this.driver.getTitle().should.eventually.equal(this.sauce.homePage.title);

		callback();
	});

	this.When(/^I choose "([^"]*)" from the menu$/, function (link, callback)
	{
		this.sauce.homePage.click(this.sauce.homePage.pricingLink);

		callback();
	});

	this.Then(/^I should see the pricing page$/, function (callback)
	{
		this.driver.getTitle().should.eventually.equal(this.sauce.pricingPage.title);

		callback();
	});

	this.Then(/^I should see (\d+) for (.*)$/, function (expected_price, plan, callback)
	{
		console.log("expected price: ", expected_price);
		console.log("for plan: ", plan);

		var price_for_plan = this.sauce.pricingPage.price_for_plan(plan);

		this.sauce.homePage.getText(price_for_plan)
			.then(function(price) {
				console.log("got price:", price);
				console.log("expecting:", expected_price);
				price.should.equal(expected_price);
			});

		callback();
	});
}

module.exports = pricing_plan_steps;
