/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

// Done using for loop
function diffArray(arr1, arr2) {
	const result = [];

	for (let i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) === -1) {
			result.push(arr1[i]);
		}
	}

	for (let j = 0; j < arr2.length; j++) {
		if (arr1.indexOf(arr2[j]) === -1) {
			result.push(arr2[j]);
		}
	}
	return result;
}

// Done using filter()
function diffArray(arr1, arr2) {
	const combinedArr = arr1.concat(arr2);
	return combinedArr.filter(function (num) {
		if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
			return num;
		}
	});
}

// Tests
console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
