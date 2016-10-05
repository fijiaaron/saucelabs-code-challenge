// WebDriverBuilder.js

"use strict";

var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var chromedriver = require("chromedriver");
var chromedriver_path = require('chromedriver').path;
var geckodriver = require("geckodriver");


class WebDriverBuilder
{
	build(browser, remote, baseUrl, settings)
	{
		var capabilities = this.get_browser_capabilities(browser, settings);

		var builder = new webdriver.Builder().withCapabilities(capabilities)

		if (remote)
		{
			builder = builder.usingServer(remote.url);
		}

		var driver = builder.build();

		// baseurl doesn't work 
		driver.baseUrl = baseUrl;

		// settings for timeout, etc not implemented yet

		return driver;
	}

	get_browser_capabilities(browser, settings) 
	{
		var capabilities;

		switch(browser.toUpperCase()) {
			case "CHROME":
				capabilities = webdriver.Capabilities.chrome();
				var service = new chrome.ServiceBuilder(chromedriver.path).build();
				chrome.setDefaultService(service);
				break;
			case "FIREFOX":
				capabilities = webdriver.Capabilities.firefox();
				break;
			default: 
				throw Error("browser capabilities not supported for: " + browser);
		}

		return capabilities;
	}


	static build_from_settings(settings)
	{
		var builder = new webdriver.Builder().withCapabilities(settings.selenium.capabilities);

		if (settings.selenium.remote)
		{
			var selenium_remote_url = settings.selenium.get_remote_url();
			builder = builder.usingServer(selenium_remote_url);
		}

		return builder.build();
	}
}

module.exports = WebDriverBuilder;
