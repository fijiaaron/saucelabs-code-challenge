// env.js

"use strict";

global.chai = require("chai");
chai.use(require("chai-as-promised"));
global.expect = chai.expect;
global.should = chai.should();

global.PWD = process.env.PWD;
global.settings = require(PWD + "/settings.js");

// console.log("SETTINGS", settings);


function env()
{
    this.setDefaultTimeout(settings.selenium.timeout);
}

module.exports = env;
