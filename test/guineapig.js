
var webdriver = require('selenium-webdriver');
var by = webdriver.By;
var until = webdriver.until;

// create webdriver instance 

var browser = new webdriver.Builder().usingServer("http://localhost:4444/wd/hub").withCapabilities({'browserName': 'firefox' }).build();

// open guinea pig page

browser.get("https://saucelabs.com/test/guinea-pig");

// get title 

browser.getTitle()
		.then(function(title) {
			console.log("got title: " + title);
		});

// check first checkbox

var first_checkbox = browser.findElement(by.id("unchecked_checkbox"));

first_checkbox.getAttribute("checked")
		.then(function(checked) {
			console.log("checked before checking? " + checked);
		});


isChecked(first_checkbox);

first_checkbox.click()
		.then(function() {
			console.log("check checkbox")
		});


first_checkbox.getAttribute("checked")
		.then(function(checked) {
			console.log("checked after checking? " + checked);
		});

function isChecked(element) {
	element.getAttribute("checked")
		.then(function(checked) {
			console.log("isChecked? " + checked);
		});
}


isChecked(first_checkbox);


browser.findElement(by.id("fbemail"))
		.sendKeys("aarone@one-shore.com")
		.then(function(value) {
			console.log("entered email address");
		});

browser.findElement(by.id("fbemail"))
		.getAttribute("value")
		.then(function(value) {
			console.log("got email address: " + value);
		});

browser.sleep(2000);
browser.quit();
