'use strict';

const r_to_d = {
	M: 1000, CM: 900, D: 500, CD: 400,
	C: 100, XC: 90, L: 50,
	XL: 40, X: 10, IX: 9,
	V: 5, IV: 4, I: 1
};

const decimalToRoman = function (num) {
	num = parseInt(num);
	let res = '';
	for (let i in r_to_d) {
		while (num >= r_to_d[i]) {
			res += i;
			num -= r_to_d[i];
		}
	}
	return res;
}

const romanToDecimal = function (num) {
	num = num.toUpperCase();
	let res = 0;
	let prev = 1001;
	for (let i = 0; i < num.length; ++i) {
		let current = r_to_d[num[i]];
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