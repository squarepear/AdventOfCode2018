getInput().then((input) => {
	let exp = /#(\d*)\ @\ (\d*),(\d*):\ (\d*)x(\d*)/g

	let out = []
	let xArray
	
	while (xArray = exp.exec(input)) {
		xArray.shift()
		out.push(xArray)
	}

	new Promise((resolve, reject) => {
		let inches = {}

		for (let i = 0; i < out.length; i++) {
			for (let x = out[i][1]; x < out[i][1] + out[i][3]; x++) {
				for (let y = out[i][2]; y < out[i][2] + out[i][4]; y++) {
					inches[x + ',' + y] = (inches[x + ',' + y] > 0) ? inches[x + ',' + y] + 1 : 1
				}
			}
		}

		resolve(inches)
	}).then((inches) => {
		let total = 0

		for (let index in inches) {
			let val = inches[index]
			if (val > 1) {
				total++
			}
		}

		console.log(inches)
		createP('Overlap Count: ' + total)
	})

})

function setup() {
	noCanvas()
}