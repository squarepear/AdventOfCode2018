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
		var inches = zeros([1000, 1000]);

		for (var i = 0; i < out.length; i++) {
			for (var x = 0; x < parseInt(out[i][3]); x++) {
				for (var y = 0; y < parseInt(out[i][4]); y++) {
					inches[parseInt(out[i][1]) + x][parseInt(out[i][2]) + y]++;
				}
			}
		}

		resolve(inches);
	}).then(function (inches) {
		var total = 0;

		for (var x = 0; x < inches.length; x++) {
			for (var y = 0; y < inches[x].length; y++) {
				if (inches[x][y] > 1) {
					total++;
				}
			}
		}

		createP('Overlap Count: ' + total);
	});
});

function setup() {
	noCanvas();
}

function zeros(dimensions) {
	var array = [];

	for (var i = 0; i < dimensions[0]; i++) {
		array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
	}

	return array;
}