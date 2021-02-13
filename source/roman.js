'use strict';

const ROMAN_TO_DECIMAL = {
  M: 1000, CM: 900, D: 500, CD: 400,
  C: 100, XC: 90, L: 50,
  XL: 40, X: 10, IX: 9,
  V: 5, IV: 4, I: 1
};

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
 * @return {number} - число
 */
const romanToDecimal = (romanNumber) => {
  let prevNumber = Math.max(...Object.values(ROMAN_TO_DECIMAL)); 
  return romanNumber.split('').reduce((decimalNumber, current) => {
    const currentNumber = ROMAN_TO_DECIMAL[current];
    const diff = currentNumber > prevNumber ? prevNumber * 2 : 0;
    prevNumber = currentNumber;
    return decimalNumber + currentNumber - diff;
  }, 0);
};

/**
 * Проверка формата римского числа
 * @param {string} romanNumber - строка с римским числом
 * @return {boolean} - true, если число в римском формате валидное
 */
const isRomanValid = (romanNumber) => romanNumber.split('').every((char) =>
    Object.keys(ROMAN_TO_DECIMAL).includes(char));

/**
 * Перевод числа из римского формата в десятичный и обратно
 * @param {string} num - строка с числом
 * @return {number | string} - строка с римским числом или целое десятичное число
 * @throws {TypeError} - если строка имеет неправильный формат
 */
const roman = (number) => {
  if (Number(number)) {
    return decimalToRoman(number);
  } 

  const upperCaseNumber = number.toUpperCase();
  if (!isRomanValid(upperCaseNumber)) {
    throw new TypeError('Invalid roman number format!');
  }

  return romanToDecimal(upperCaseNumber);
};
