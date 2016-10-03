//guinea_pig_test.js

var GuineaPig = require("../lib/saucelabs/GuineaPig");
var WebDriverWrapper = require("../lib/WebDriverWrapper");


// var chai = require("chai");
// chai.use(require("chai-webdriver"));
// var expect = chai.expect;

// var chrome = require('selenium-webdriver/chrome');
// var path = require('chromedriver').path;

var webdriver = require("selenium-webdriver");
// var by = webdriver.By;
// var until = webdriver.until;

// var driver = new webdriver.Builder()
// 	.usingServer('http://localhost:4444/wd/hub')
// 	.withCapabilities(webdriver.Capabilities.chrome())
// 	.build();

var driver = new webdriver.Builder()
	.usingServer('http://localhost:4444/wd/hub')
	.withCapabilities(webdriver.Capabilities.chrome())
	.build();

// driver = new WebDriverWrapper().get_webdriver_instance("chrome");


describe( "Sauce Labs" , function() {

	describe( "Guinea Pig" , function() {

		before( "setup webdriver", function() {			
			driver.get("https://saucelabs.com/test/guinea-pig")
		});

		it ("should open in the browser", function(done) {

			var cuy = new GuineaPig(driver);
			console.log(cuy.url);

				driver.getTitle().then( function(title) {
					expect(title).to.eventually.equal("I am a page title");
				})

			done();
			
		});


		after( "shut down webdriver", function() {
			
			driver.quit()

		});
	});
});