// run_parallel_tests.js

var multicuke = require('multi-cuke');
console.log(multicuke);

var options = {
	cucumberPath: "./node_modules/.bin/cucumberjs",
	tags: [ "@PricingPlan", "@GuineaPig1", "GuineaPig2" ]
};


multicuke(options);

// Promise.all([
// 	multicuke({ tags: ['@PricingPlan'] }),
// 	multicuke({ tags: ['@GuineaPig1'] }),
// 	multicuke({ tags: ['@GuineaPig2'] })
// ]).then((results) => {
// 	console.log(results);
// 	console.log(results.outputHandler.getSummaryOutput());
// });