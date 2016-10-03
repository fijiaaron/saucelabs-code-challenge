//GuineaPig.js

class GuineaPig
{
	constructor(driver)
	{
		this.driver = driver;

		this._url = "https://saucelabs.com/test/guinea-pig";
		console.log("constructing GuineaPig")
	}

	get url(){
		console.log("getting GuineaPig url")
		return this._url;
	}
}

module.exports = GuineaPig;
