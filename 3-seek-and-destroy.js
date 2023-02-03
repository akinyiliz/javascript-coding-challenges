/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
function destroyer(arr) {
	// turn arguments to array
	const args = Array.from(arguments);

	// get targeted arguments
	const targets = args.splice(1);

	// loop through the first arg(arr) & push the elements that don't exist in targets
	const result = [];
	arr.filter(function (element) {
		if (!targets.includes(element)) {
			result.push(element);
		}
	});
	return result;
}

console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53));
