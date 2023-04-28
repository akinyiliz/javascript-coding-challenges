// Flatten a nested array. You must account for varying levels of nesting. Without using flat()

function steamrollArray(arr) {
	const newArr = arr.reduce((acc, item) => {
		if (Array.isArray(item)) {
			acc = acc.concat(steamrollArray(item));
		} else {
			acc.push(item);
		}
		return acc;
	}, []);
	return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
