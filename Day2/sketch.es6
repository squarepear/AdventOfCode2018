getInput().then((input) => {
	var inputArray = input.split('\n')

	let twoSum = 0
	let threeSum = 0

	for (let i = 0; i < inputArray.length; i++) {
		let id = inputArray[i].split('')

		let count = {}
		for (let j = 0; j < id.length; j++) {
			count[id[j]] = (count[id[j]] > 0) ? count[id[j]] + 1 : 1
		}
		let countTwo = false
		let countThree = false
		for (let index in count) {
			let val = count[index]
			if (!countTwo && val == 2) {
				twoSum++
				countTwo = true
			} else if (!countThree && val == 3) {
				threeSum++
				countThree = true
			}
		}
	}

	createP('Checksum: ' + (twoSum * threeSum))

	let foundBox = false

	for (let i = 0; i < inputArray.length; i++) {
		if (!foundBox) {
			for (let j = 0; j < inputArray.length; j++) {
				if (i != j) {
					let out = checkIDs(inputArray[i], inputArray[j])
					if (out.length == inputArray[i].length - 1) {
						createP('Box IDs: ' + inputArray[i] + ', ' + inputArray[j])
						createP('Equal Chars: ' + out)
						foundBox = true
						break
					}
				}
			}
		}
	}
})

function setup() {
	noCanvas()
}

function checkIDs(a, b) {
	let differ = 0;
	let out = ''

	for (let i = 0; i < a.length; i++) {
		if (a[i] != b[i]) {
			differ++
		} else {
			out += a[i]
		}
	}

	return out
}