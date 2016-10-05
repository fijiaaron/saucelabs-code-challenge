// guinea_pig_steps.js

"use strict";

var GuineaPig = require(PWD + "/lib/saucelabs/GuineaPig.js");

function guinea_pig_steps()
{

	this.Given(/^I am on the Guinea Pig page$/, function (callback)
	{
		this.cuy.open();
		this.driver.getTitle().should.eventually.equal(this.cuy.title);

		callback();
	});

	this.When(/^I click the first checkbox$/, function (callback)
	{
		this.cuy.click_first_checkbox();

		callback();
	});

	this.Then(/^the first checkbox should be checked$/, function (callback)
	{
		this.cuy.is_first_checkbox_checked()
			.then( (checked)=> {
				console.log("first checkbox is checked:", checked);
			});

		this.cuy.is_first_checkbox_checked().should.eventually.equal("true");

		callback();
	});

	this.When(/^I enter (.*) in the email address field$/, function (email, callback)
	{
		this.cuy.enter_email_address(email);

		callback();
	});

	this.Then(/^I should see (.*) in the email address field$/, function (expected_email, callback)
	{
		console.log("expected_email", expected_email);

		this.cuy.get_email_address()
			.then( (email) => { 
				console.log("got email address: " + email); 
			});
	
		this.cuy.get_email_address().should.eventually.equal(expected_email);

		callback();
	});




}

module.exports = guinea_pig_steps;
