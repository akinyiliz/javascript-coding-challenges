// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
	// Function to match each character with the base pair
	const matchWithBasePair = (char) => {
		switch (char) {
			case "A":
				return ["A", "T"];
			case "T":
				return ["T", "A"];
			case "C":
				return ["C", "G"];
			case "G":
				return ["G", "C"];
		}
	};

	const dnaPairs = [];
	// Find pair for every character in the string
	for (let i = 0; i < str.length; i++) {
		dnaPairs.push(matchWithBasePair(str[i]));
	}

	return dnaPairs;
}

// Tests
console.log(pairElement("TTGAG")); // returns [ [ 'T', 'A' ], [ 'T', 'A' ], [ 'G', 'C' ], [ 'A', 'T' ],[ 'G', 'C' ] ]
console.log(pairElement("GCG")); // returns [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
