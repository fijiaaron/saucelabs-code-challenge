// hooks.js

"use strict";


var hooks = function hooks ()
{
	this.BeforeFeatures(function (event)
	{
		// console.log("BEFORE FEATURES");
	});

	this.BeforeFeature(function(scenario) 
	{
		// console.log("BEFORE FEATURE:", "close browser");
	});

	this.BeforeScenario(function(scenario) 
	{
		// console.log("BEFORE SCENARIO:", "close browser");
	});

	this.Before(function(scenario)
	{
		// console.log("BEFORE:", "close browser");
		return this.driver.manage().deleteAllCookies();

	});

	this.After(function(scenario) 
	{
		// console.log("AFTER:", "close browser");
		return this.driver.quit();
	});


	this.AfterScenario(function(scenario) 
	{
		// console.log("AFTER SCENARIO:", "close browser");
	});

	this.AfterFeature(function(scenario) 
	{
		// console.log("AFTER FEATURE:", "close browser");
	});

	this.AfterFeatures(function (event)
	{
		// console.log("AFTER  FEATURES");
	});
}

module.exports = hooks;
