// get_webdriver_instance.js

var webdriver = require("selenium-webdriver");

var chrome = require('selenium-webdriver/chrome');
var chromedriver_path = require('chromedriver').path;

class WebDriverWrapper
{
	constructor()
	{

	}

	get_webdriver_instance(browser, baseUrl, remote, settings)
	{
		var capabilities = this.get_browser_capabilities(browser, settings);

		var service = new chrome.ServiceBuilder(chromedriver_path).build();
		chrome.setDefaultService(service);

		var builder = new webdriver.Builder().withCapabilities(capabilities);

		if (remote) {
			builder = builder.usingRemote(remote.url)
		}
	}

	get_browser_capabilities(browser, settings) 
	{
		var capabilities;

		switch(browser.toUpperCase()) {
			case "CHROME":
				capabilities = webdriver.Capabilities.chrome();
				break;
			case "FIREFOX":
				capabilities = webdriver.Capabilities.firefox();
				break;
			default: 
				throw Error("browser capabilities not supported for: " + browser);
		}

		return capabilities;
	}
}

module.exports = WebDriverWrapper;
