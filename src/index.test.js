/* global test expect */
import parser from '.'; // NOTE: when file name is missing, the importer will look for index.js

test('should have a function to parseBoolean', () => {
  expect(parser.parseBoolean(0)).toBe(false);
});
