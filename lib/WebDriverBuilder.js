// get_webdriver_instance.js

var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var chromedriver = require("chromedriver");
var geckodriver = require("geckdriver");


class WebDriverBuilder
{
	get_instance(browser, baseUrl, remote, settings)
	{
		var capabilities = this.get_browser_capabilities(browser, settings);

		var builder = new webdriver.Builder().withCapabilities(capabilities);

		if (remote)
		{
			builder = builder.usingRemote(remote.url)
		}

		return builder.build();
	}

	get_browser_capabilities(browser, settings) 
	{
		var capabilities;

		switch(browser.toUpperCase()) {
			case "CHROME":
				capabilities = webdriver.Capabilities.chrome();
				var service = new chrome.ServiceBuilder(chromedriver_path).build();
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
}

module.exports = WebDriverBuilder;
