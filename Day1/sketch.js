'use strict';

getInput().then(function (input) {
	var inputArray = input.split('\n');

	var output = 0;
	var frequencies = {};
	var repeatFound = false;
	var sumFound = false;

	while (!repeatFound) {
		for (var i = 0; i < inputArray.length; i++) {
			output += parseInt(inputArray[i]);

			if (!repeatFound) {
				if (frequencies[output] == true) {
					repeatFound = true;
					createP('Repeat: ' + output);
				} else {
					frequencies[output] = true;
				}
			}
		}

		if (!sumFound) {
			createP('Sum: ' + output);
			sumFound = true;
		}
	}
});

function setup() {
	noCanvas();
}