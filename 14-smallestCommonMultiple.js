// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
	let numsInRange = [];

	let largePossValue = 1;

	// Find the min and max value
	const minNum = Math.min(arr[0], arr[1]);
	const maxNum = Math.max(arr[0], arr[1]);

	for (let i = minNum; i <= maxNum; i++) {
		// List of all number in the range
		numsInRange.push(i);
		// Largest posible value
		largePossValue *= i;
	}

	//test all multiples of max value
	for (let multiple = maxNum; multiple <= largePossValue; multiple += maxNum) {
		//Check if all values in range divides the multiple
		let divisorCount = 0;
		for (let i = minNum; i <= maxNum; i++) {
			if (multiple % i === 0) {
				divisorCount += 1;
			}
		}
		if (divisorCount === numsInRange.length) {
			return multiple;
		}
	}
}

console.log(smallestCommons([1, 5]));
