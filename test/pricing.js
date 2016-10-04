"use strict";

var webdriver = require("selenium-webdriver");
var By = webdriver.By;
var until = webdriver.until;
var browser = new webdriver.Builder()
		.usingServer("http://localhost:4444/wd/hub")
		.withCapabilities({'browserName': 'firefox' })
		.build();

browser.manage().timeouts().implicitlyWait(30000);
browser.manage().timeouts().pageLoadTimeout(120000)

var chai = require("chai");

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var chaiWebDriver = require("chai-webdriver");
var chaiWebDriverPromised = require("chai-webdriver-promised");
chai.use(chaiWebDriverPromised(browser, 5000));

var chaiSmoothie = require('chai-smoothie');
chai.use(require('chai-smoothie'));

var expect = chai.expect;
var should = chai.should();

var SauceLabsDriver = require("../lib/saucelabs/SauceLabsDriver.js");
var sauce = new SauceLabsDriver(browser, "https://www.saucelabs.com");
	

sauce.homePage.open();

browser.getTitle()
		.then(function(title) {
			console.log("got title:", title);
			console.log("expecting:", sauce.homePage.title);
			title.should.equal(sauce.homePage.title);
		});

browser.getTitle()
		.should.eventually.equal(sauce.homePage.title);

browser.findElement(By.xpath('//a[contains(text(), "Pricing")]')).click()
		.then(function() {
			console.log("clicked!");
		});

browser.getTitle()
		.then(function(title) {
			console.log("got title:", title);
			console.log("expecting:", sauce.pricingPage.title);
			title.should.equal(sauce.pricingPage.title);
		});

browser.getTitle()
		.should.eventually.equal("Pricing | Sauce Labs");

browser.findElement(sauce.pricingPage.price_for_plan("Individual"))
		.getText()
		.then(function(price) {
			console.log("got price:", price);
			console.log("expecting:", 49);
			// price.should.equal(49);

browser.quit();