// env.js

"use strict";

var PWD = process.env.PWD;
var settings = require(PWD + "/settings.js");

function env()
{
    this.setDefaultTimeout(settings.selenium.timeout);
}

module.exports = env;
