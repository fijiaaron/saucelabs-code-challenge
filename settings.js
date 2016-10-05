// settings.js

"use strict";

var settings = {
	selenium: 
	{
		capabilities:
		{
			browserName: "chrome",
		},
		timeout: 60000,
		remote: true,
		// get_remote_url: function() { return settings.standalone.server.url },
		get_remote_url: function() { return settings.saucelabs.server.get_url(); }
	},
	standalone:
	{
		server:
		{
			url: "http://localhost:4444/wd/hub"
		}
	},
	saucelabs:
	{
		baseUrl: "https://saucelabs.com",
		userName: process.env.SAUCELABS_USER_NAME || "mySauceUserName",
		accessKey: process.env.SAUCELABS_ACCESS_KEY || "mySauceAccessKey",
		server: 
		{
			get_url: function(userName, accessKey)
			{
				var userName = userName || settings.saucelabs.userName;
				var accessKey = accessKey || settings.saucelabs.accessKey;
				return `http://${userName}:${accessKey}@ondemand.saucelabs.com:80/wd/hub`
			}
		}
	}
}

module.exports = settings;
