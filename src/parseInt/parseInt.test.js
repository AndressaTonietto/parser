/* global test expect */

import parseInteger from './parseInt';

test.skip('Param type must be a number', () => {
  expect(parseInteger('a')).toBe('Param type must be a number');
});

test('Should parse a float', () => {
  expect(parseInteger(1.1)).toBe(1);
});

test('Should parse an integer', () => {
  expect(parseInteger(5)).toBe(5);
});

test('Should parse a negative integer', () => {
  expect(parseInteger(-15)).toBe(-15);
});

test('Should parse negative float', () => {
  expect(parseInteger(-7.2)).toBe(-7);
});
