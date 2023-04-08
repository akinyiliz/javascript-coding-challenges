// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	// loop through the string
	for (let i = 0; i < str.length; i++) {
		// check if there is a missing letter using char code
		if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
			let indexOfMissingLetter = str.charCodeAt(i) + 1;
			// return the letter
			return String.fromCharCode(indexOfMissingLetter);
		}
	}
	return undefined;
}

console.log(fearNotLetter("abcde"));
