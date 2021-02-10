'use strict';

const R_TO_D = {
	M: 1000, CM: 900, D: 500, CD: 400,
	C: 100, XC: 90, L: 50,
	XL: 40, X: 10, IX: 9,
	V: 5, IV: 4, I: 1
};

const decimalToRoman = function (num) {
	num = parseInt(num);
	let res = '';
	for (let i in R_TO_D) {
		while (num >= R_TO_D[i]) {
			res += i;
			num -= R_TO_D[i];
		}
	}
	return res;
}

const romanToDecimal = function (num) {
	num = num.toUpperCase();
	let res = 0;
	let prev = 1001;
	for (let i = 0; i < num.length; ++i) {
		let current = R_TO_D[num[i]];
		res += current;
		if (current > prev) {
			res -= prev * 2;
		}
		prev = current;
	}
	return res;
}

const roman = function (num) {
	if (isNaN(num)) {
		return romanToDecimal(num);
	} else {
		return decimalToRoman(num)
	}
}