const manipulateNumbers = require('../script');

test('should be null', () => {
  expect(manipulateNumbers(null)).toBeNull();
  expect(manipulateNumbers([])).toBeNull();
});