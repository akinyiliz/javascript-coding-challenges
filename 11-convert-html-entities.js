// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
	let charArr = str.split("");
	for (let i = 0; i < charArr.length; i++) {
		switch (charArr[i]) {
			case "&":
				charArr[i] = "&amp;";
				break;
			case "<":
				charArr[i] = "&lt;";
				break;
			case ">":
				charArr[i] = "&gt;";
				break;
			case "<>":
				charArr[i] = "&lt;&gt;";
				break;
			case '"':
				charArr[i] = "&quot;";
				break;
			case "'":
				charArr[i] = "&apos;";
				break;
		}
	}
	let finalStr = charArr.join("");
	return finalStr;
}

convertHTML("Dolce & Gabbana");
