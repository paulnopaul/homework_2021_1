'use strict';

const ROMAN_TO_DECIMAL = {
	M: 1000, CM: 900, D: 500, CD: 400,
	C: 100, XC: 90, L: 50,
	XL: 40, X: 10, IX: 9,
	V: 5, IV: 4, I: 1
};

const decimalToRoman = function (num) {
	num = parseInt(num);
	let res = '';
	for (let i in ROMAN_TO_DECIMAL) {
		while (num >= ROMAN_TO_DECIMAL[i]) {
			res += i;
			num -= ROMAN_TO_DECIMAL[i];
		}
	}
	return res;
}

const romanToDecimal = function (num) {
	num = num.toUpperCase();
	let res = 0;
	let prev = 1001;
	for (let i = 0; i < num.length; ++i) {
		let current = ROMAN_TO_DECIMAL[num[i]];
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