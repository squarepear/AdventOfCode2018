getInput().then((input) => {
	let exp = /#(\d*)\ @\ (\d*),(\d*):\ (\d*)x(\d*)/g

	let out = []
	let xArray
	
	while (xArray = exp.exec(input)) {
		xArray.shift()
		out.push(xArray)
	}

	new Promise((resolve, reject) => {
		let inches = zeros([1000, 1000])

		for (let i = 0; i < out.length; i++) {
			for (let x = 0; x < parseInt(out[i][3]); x++) {
				for (let y = 0; y < parseInt(out[i][4]); y++) {
					inches[parseInt(out[i][1]) + x][parseInt(out[i][2]) + y]++
				}
			}
		}

		resolve(inches)
	}).then((inches) => {
		let total = 0

		for (let x = 0; x < inches.length; x++) {
			for (let y = 0; y < inches[x].length; y++) {
				if (inches[x][y] > 1) {
					total++
				}
				
			}
		}


		createP('Overlap Count: ' + total)
	})

})

function setup() {
	noCanvas()
}

function zeros(dimensions) {
	var array = []

	for (var i = 0; i < dimensions[0]; i++) {
		array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)))
	}

	return array
}