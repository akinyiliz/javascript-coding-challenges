// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
	const combinedArray = [];

	for (let i = 0; i < arguments.length; i++) {
		let individualArrays = arguments[i];

		for (let j = 0; j < individualArrays.length; j++) {
			let index = individualArrays[j];

			if (combinedArray.indexOf(index) < 0) {
				combinedArray.push(index);
			}
		}
	}
	return combinedArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
