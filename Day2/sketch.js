'use strict';

getInput().then(function (input) {
	var inputArray = input.split('\n');

	var twoSum = 0;
	var threeSum = 0;

	for (var i = 0; i < inputArray.length; i++) {
		var id = inputArray[i].split('');

		var count = {};
		for (var j = 0; j < id.length; j++) {
			count[id[j]] = count[id[j]] > 0 ? count[id[j]] + 1 : 1;
		}
		var countTwo = false;
		var countThree = false;
		for (var index in count) {
			var val = count[index];
			if (!countTwo && val == 2) {
				twoSum++;
				countTwo = true;
			} else if (!countThree && val == 3) {
				threeSum++;
				countThree = true;
			}
		}
	}

	createP('Checksum: ' + twoSum * threeSum);

	var foundBox = false;

	for (var _i = 0; _i < inputArray.length; _i++) {
		if (!foundBox) {
			for (var _j = 0; _j < inputArray.length; _j++) {
				if (_i != _j) {
					var out = checkIDs(inputArray[_i], inputArray[_j]);
					if (out.length == inputArray[_i].length - 1) {
						createP('Box IDs: ' + inputArray[_i] + ', ' + inputArray[_j]);
						createP('Equal Chars: ' + out);
						foundBox = true;
						break;
					}
				}
			}
		}
	}
});

function setup() {
	noCanvas();
}

function checkIDs(a, b) {
	var differ = 0;
	var out = '';

	for (var i = 0; i < a.length; i++) {
		if (a[i] != b[i]) {
			differ++;
		} else {
			out += a[i];
		}
	}

	return out;
}