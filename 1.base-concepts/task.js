"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		let firstRoot = (-b + Math.sqrt(d)) / (2 * a);
		let secondRoot = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(firstRoot, secondRoot);
		return arr
	}
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		percent = Number(percent);
		contribution = Number(contribution);
		amount = Number(amount);
		countMonths = Number(countMonths);
	}

	let monthlyPercent = percent / 100 / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let totalMortgage = (monthlyPayment * countMonths).toFixed(2);
	return Number(totalMortgage);
}