// hooks.js

"use strict";

var driver = require('./world.js').driver;

var hooks = function hooks ()
{
	this.World = require('../support/world.js')

	this.Before(function(scenario)
	{
		console.log("BEFORE");
		return this.driver.manage().deleteAllCookies();
	});

	this.After(function(scenario) 
	{
		console.log("AFTER");
		return this.driver.quit();
	});


	this.registerHandler('AfterFeatures', function (event)
	{
		console.log("AFTER ALL FEATURES");
	});

}

module.exports = hooks;