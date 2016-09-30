var GuineaPig = require('../lib/saucelabs/GuineaPig.js');

var chai = require('chai');
var expect = chai.expect;

var webdriver = require('selenium-webdriver');
by = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();


describe( "Sauce Labs" , ()=> {

	describe( "Guinea Pig" , ()=> {

		it ("should open in the browser", ()=> {

			var cuy = new GuineaPig(driver);


		});
	});
});