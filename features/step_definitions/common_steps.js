// common_steps.js

"use strict";

var webdriver = require("selenium-webdriver");
var By = webdriver.By;

function common_steps()
{
	this.Given(/^I am on the "([^"]*)" page$/, function (pageName, callback)
	{
		this.page = this.sauce.getPage(pageName).open();

		this.driver.getTitle().should.eventually.equal(this.page.title);
		this.driver.getCurrentUrl().should.eventually.equal(this.page.url);

		callback();
	});


	this.When(/^I click on the "([^"]*)" link$/, function (text, callback) 
	{
		this.driver.findElement(By.linkText(text)).click();

		callback();
	});

	this.Then(/^I should be on the "([^"]*)" page$/, function (pageName, callback) 
	{
		this.page = this.sauce.getPage(pageName);

		this.driver.getTitle().should.eventually.equal(this.page.title);
		this.driver.getCurrentUrl().should.eventually.equal(this.page.url);

		callback();
	});

	this.Then(/^I should see text "([^"]*)"$/, function (text, callback)
	{

		this.driver.sleep(2000);
		this.driver.findElement(By.tagName("body")).getText().should.eventually.contain(text);

		callback();
	});
}

module.exports = common_steps;
