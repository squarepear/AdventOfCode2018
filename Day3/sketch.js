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
		var inches = arrays([1000, 1000]);

		for (var i = 0; i < out.length; i++) {
			for (var x = 0; x < parseInt(out[i][3]); x++) {
				for (var y = 0; y < parseInt(out[i][4]); y++) {
					inches[parseInt(out[i][1]) + x][parseInt(out[i][2]) + y].push(parseInt(out[i][0]));
				}
			}
		}

		resolve(inches);
	}).then(function (inches) {
		var total = 0;

		var count = arrays([out.length]);

		console.log(count);

		for (var x = 0; x < inches.length; x++) {
			for (var y = 0; y < inches[x].length; y++) {
				if (inches[x][y].length > 1) {
					total++;

					for (var i = 0; i < inches[x][y].length; i++) {
						count[inches[x][y][i] - 1].push('Overlap');
					}
				}
			}
		}

		console.log(count);

		createP('Overlap Count: ' + total);

		for (var index in count) {
			// if (count[index].length == 2) createP('No Overlap: #|1 @ |2,|3 |4x|5', out[index])
			if (count[index].length == 0) createP('No Overlap: ' + out[index]);
		}
	});
});

function setup() {
	noCanvas();
}

function arrays(dimensions) {
	var array = [];

	for (var i = 0; i < dimensions[0]; i++) {
		array.push(dimensions.length == 1 ? [] : arrays(dimensions.slice(1)));
	}

	return array;
}