'use strict';

getInput().then(function (input) {
	var exp = /#(\d*)\ @\ (\d*),(\d*):\ (\d*)x(\d*)/g;

	var out = [];
	var xArray = void 0;

	while (xArray = exp.exec(input)) {
		xArray.shift();
		out.push(xArray);
	}

	new Promise(function (resolve, reject) {
		var inches = {};

		for (var i = 0; i < out.length; i++) {
			for (var x = out[i][1]; x < out[i][1] + out[i][3]; x++) {
				for (var y = out[i][2]; y < out[i][2] + out[i][4]; y++) {
					inches[x + ',' + y] = inches[x + ',' + y] > 0 ? inches[x + ',' + y] + 1 : 1;
				}
			}
		}

		resolve(inches);
	}).then(function (inches) {
		var total = 0;

		for (var index in inches) {
			var val = inches[index];
			if (val > 1) {
				total++;
			}
		}

		console.log(inches);
		createP('Overlap Count: ' + total);
	});
});

function setup() {
	noCanvas();
}