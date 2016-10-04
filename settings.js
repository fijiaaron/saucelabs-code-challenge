// settings.js

"use strict";

var settings = {
	selenium : 
	{
		capabilities :
		{
			browserName: "chrome",
		},
		timeout: 60000, 
		use_remote: true,
		remote:
		{
			url: "http://localhost:4444/wd/hub"
		},
		saucelabs:
		{
			url: "http://<userName>:<accessKey>@ondemand.saucelabs.com:80/wd/hub",
			userName: process.env.SAUCE_LABS_USER_NAME || "ahdevans_sauce",
			accessKey: process.env.SAUCE_LABS_ACCESS_KEY || "b0334d33-b819-4403-a0da-1d55db0eebdb",

			get_url_with_tokens: function(userName, accessKey)
			{
				userName = userName || settings.selenium.saucelabs.userName;
				accessKey = accessKey || settings.selenium.saucelabs.accessKey;

				return settings.selenium.saucelabs.url
					.replace("<userName>", userName)
					.replace("<accessKey>", accessKey);
			}
		}
	},
	saucelabs: {
		baseUrl: "https://saucelabs.com"
	}
}

module.exports = settings;
