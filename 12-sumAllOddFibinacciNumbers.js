function sumFibs(num) {
	const fibArray = [1, 1];

	for (let i = 1; i <= num; i++) {
		const prevNum1 = fibArray[fibArray.length - 1];
		const prevNum2 = fibArray[fibArray.length - 2];
		const fibNumber = prevNum1 + prevNum2;

		if (fibNumber <= num) {
			fibArray.push(fibNumber);
		}
	}

	const fibOddNumbers = fibArray.filter((num) => {
		return num % 2 == 1;
	});

	let sum = 0;

	fibOddNumbers.forEach((oddNum) => {
		sum += oddNum;
	});

	return sum;
}

console.log(sumFibs(4));
