const manipulateNumbers = require('../../desafio-2/script');

describe("Test manipulateNumbers function", () => {

    test('should be null when no values has been passed', () => {
        expect(manipulateNumbers()).toBeNull();
        expect(manipulateNumbers(null)).toBeNull();
    });
    
    test('should be null when an empty array has been passed', () => {
        expect(manipulateNumbers([])).toBeNull();
    });
    
    test('should be null when an array of two elements has been passed', () => {
        expect(manipulateNumbers([1, 2])).toBeNull();
    });
    
    test('should manipulate an array of three numbers', () => {
        expect(manipulateNumbers([1, 2, 3])).toStrictEqual([3, 2, 1]);
    });
    
    test('should manipulate an array with many numbers', () => {
        expect(manipulateNumbers([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 2, 3, 4, 5, 1]);
    });
    
});