/* global test expect */
import parserReverse from './parseReverseString';

test('should return "olleh" with param "hello"', () => {
  expect(parserReverse('hello')).toBe('olleh');
});

test('should return "321" with param "123"', () => {
  expect(parserReverse('123')).toBe('321');
});

test('should return "" with empty param', () => {
  expect(parserReverse('')).toBe('');
});

test('should return an error message with a number param', () => {
  expect(parserReverse(123)).toBe('Param type must be a string');
});
