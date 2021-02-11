'use strict';

const ROMAN_TO_DECIMAL = {
	M: 1000, CM: 900, D: 500, CD: 400,
	C: 100, XC: 90, L: 50,
	XL: 40, X: 10, IX: 9,
	V: 5, IV: 4, I: 1
};

const decimalToRoman = (decimalNumber) => {
	let romanNumber = '';
  let currentDecimalNumber = parseInt(decimalNumber);
	for (let i in ROMAN_TO_DECIMAL) {
		while (currentDecimalNumber >= ROMAN_TO_DECIMAL[i]) {
			romanNumber += i;
			currentDecimalNumber -= ROMAN_TO_DECIMAL[i];
		}
	}
	return romanNumber;
};

const romanToDecimal = (romanNumber) => {
	let romanNumber = romanNumber.toUpperCase();
	let decimalNumber = 0;
  // let prevChar = Math.max(...Object.values(ROMAN_TO_DECIMAL));
  let prevChar = 1001;
	for (let i = 0; i < romanNumber.length; ++i) {
		const currentChar = ROMAN_TO_DECIMAL[romanNumber[i]];
		decimalNumber += currentChar;
		if (currentChar > prevChar) {
			decimalNumber -= prevChar * 2;
		}
		prevChar = currentChar;
	}
	return decimalNumber;
};

const roman = (num) => {
	if (isNaN(num)) {
		return romanToDecimal(num);
	} else {
		return decimalToRoman(num)
	}
};
