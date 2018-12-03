getInput().then((input) => {
	let inputArray = input.split('\n')

	let output = 0
	let frequencies = {}
	let repeatFound = false
	let sumFound = false

	while (!repeatFound) {
		for (let i = 0; i < inputArray.length; i++) {
			output += parseInt(inputArray[i])

			if (!repeatFound) {
				if (frequencies[output] == true) {
					repeatFound = true
					createP('Repeat: ' + output)
				} else {
					frequencies[output] = true
				}
			}
		}

		if (!sumFound) {
			createP('Sum: ' + output)
			sumFound = true
		}
	}
})

function setup() {
	noCanvas()
}