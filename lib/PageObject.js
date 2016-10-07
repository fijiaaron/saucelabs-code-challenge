// PageObject.js

"use strict";

var webdriver = require("selenium-webdriver");
var By = webdriver.By;
var until = webdriver.until;


class PageObject
{
	constructor(driver, baseUrl, settings)
	{
		this.init(driver, baseUrl, settings);
	}

	init(driver, baseUrl, settings) 
	{
		this.driver = driver;
		this.baseUrl = baseUrl;

		for (var setting in settings)
		{
			// you can restrict or pre-modify settings here
			this[setting] = settings[setting];
		}
	}

	get url()
	{
		if (! this.path)
		{
			throw Error("url is not available for this page")
		}

		var url = this.baseUrl + this.path;
		return url;
	}

	open() 
	{
		console.log("opening page url: " + this.url);
		this.driver.get(this.url);
		this.driver.wait(until.titleIs(this.title), 1000);
		return this;
	}

	getUrl()
	{
		console.log("getting url");
		return this.driver.getCurrentUrl();
	}

	getTitle()
	{
		console.log("getting title");
		return this.driver.getTitle();
	}

	element(locator) 
	{
		console.log("finding element", locator);
		return this.driver.findElement(locator);
	}

	click(locator) 
	{
		console.log("clicking element");
		return this.element(locator).click();
	}

	getText(locator)
	{
		console.log("getting text");
		return this.element(locator).getText();
	}

	getValue(locator)
	{
		console.log("getting value");
		return this.element(locator).getAttribute("value");
	}
}

module.exports = PageObject;
