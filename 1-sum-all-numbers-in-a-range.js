/* 
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
	// Identify the smallest & the largest elements
	const start = Math.min(arr[0], arr[1]);
	const end = Math.max(arr[0], arr[1]);

	// loop through the array and each element/number in the range
	sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}

	return sum;
}

console.log(sumAll([5, 10])); // Returns 45

/** Tests
 * sumAll([1, 4]) should return a number.
 * sumAll([1, 4]) should return 10.
 * sumAll([4, 1]) should return 10.
 * sumAll([5, 10]) should return 45.
 * sumAll([10, 5]) should return 45. */
