/* global test expect */
import parseBoolean from './parseBoolean';

test('should return true with param 1', () => {
  expect(parseBoolean(1)).toBe(true);
});

test('should return false with param 0', () => {
  expect(parseBoolean(0)).toBe(false);
});

test('should return true with param "true"', () => {
  expect(parseBoolean('true')).toBe(true);
});

test('should return true with param "false"', () => {
  expect(parseBoolean('false')).toBe(false);
});

test('should return false with empty param', () => {
  expect(parseBoolean('')).toBe(false);
});

test('should return true with param "1"', () => {
  expect(parseBoolean('1')).toBe(true);
});

test('should return false with param "0"', () => {
  expect(parseBoolean('0')).toBe(false);
});
