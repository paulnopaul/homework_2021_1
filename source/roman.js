'use strict';

const ROMAN_TO_DECIMAL = {
  M: 1000, CM: 900, D: 500, CD: 400,
  C: 100, XC: 90, L: 50,
  XL: 40, X: 10, IX: 9,
  V: 5, IV: 4, I: 1
};

const ROMAN_LETTERS = 'IVXMLCDM'

/**
 * Переводит число из десятичого формата в римский
 * @param {string} decimalNumber - десятичное число 
 * @return {string} - строка в римском формате
 */
const decimalToRoman = (decimalNumber) => {
  let currentDecimalNumber = Number(decimalNumber);

  return Object.entries(ROMAN_TO_DECIMAL).reduce((romanNumber, [roman, decimal]) => {
    while (currentDecimalNumber >= decimal) {
      romanNumber += roman;
      currentDecimalNumber -= decimal;
    }
    return romanNumber;
  }, '');
};

/**
 * Переводит число из римского формата в десятичный
 * @param {string} romanNumber - строка с римским числом
 * @return {int} - число
 */
const romanToDecimal = (romanNumber) => {
  let decimalNumber = 0;
  romanNumber.toUpperCase().split("").reduce((prevChar, current) => {
    const currentChar = ROMAN_TO_DECIMAL[current];
    decimalNumber += currentChar - (currentChar > prevChar ? prevChar * 2 : 0);
    return currentChar;
  }, Math.max(...Object.values(ROMAN_TO_DECIMAL)));
  return decimalNumber;
};

/**
 * Проверка формата римского числа
 * @param {string} romanNumber - строка с римским числом
 * @return {boolean} - true, если число в римском формате валидное
 */
const validateRoman = (romanNumber) => {
  for (let char of romanNumber.toUpperCase()) {
    if (!(ROMAN_LETTERS.includes(char))) {
      return false;
    }
  }
  return true;
}

/**
 * Перевод числа из римского формата в десятичный и обратно
 * @param {string} num - строка с числом
 * @return {int | string} - строка с римским числом или целое десятичное число
 */
const roman = (num) => {
  return (!isNaN(num) ? (decimalToRoman(num)) : (validateRoman(num) ? romanToDecimal(num) : null));
};
