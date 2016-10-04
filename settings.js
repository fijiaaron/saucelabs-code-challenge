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
			userName: process.env.SAUCE_LABS_USER_NAME || "ahdevans_sauce",
			accessKey: process.env.SAUCE_LABS_ACCESS_KEY || "b0334d33-b819-4403-a0da-1d55db0eebdb",
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
