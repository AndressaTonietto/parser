/* global test expect */
import parser from '.'; // NOTE: when file name is missing, the importer will look for index.js

test('Should have a function to parseBoolean', () => {
  expect(parser.parseBoolean(0)).toBe(false);
});

test('Should have a function to parseInt', () => {
  expect(parser.parseInteger(1)).toBe(1);
});

test('Should have a function to parseReverseString', () => {
  expect(parser.parseReverseString('string')).toBe('gnirts');
});
