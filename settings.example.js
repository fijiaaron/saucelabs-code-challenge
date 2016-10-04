// settings.js

var settings = {
	selenium : 
	{
		browser: "chrome",
		timeout: 2 * 60 * 100,
		remote: true, 
		use_remote: "grid",
		grid:
		{
			url: "http://localhost:4444/wd/hub"
		},
		saucelabs:
		{
			url: "http://<userName>:<accessKey>@ondemand.saucelabs.com:80/wd/hub",
			userName: process.env.SAUCE_LABS_USER_NAME || "mySauceLabsUserName",
			accessKey: process.env.SAUCE_LABS_ACCESS_KEY || "mySauceLabsAccessKey",
			get_url_with_tokens: function(userName, accessKey)
			{
				userName = userName || settings.selenium.saucelabs.userName;
				accessKey = accessKey || settings.selenium.saucelabs.accessKey;

				var url = settings.selenium.saucelabs.url
					.replace("<userName>", userName)
					.replace("<accessKey>", accessKey);
					
				return url;
			}
		}
	}
}

module.exports = settings;
